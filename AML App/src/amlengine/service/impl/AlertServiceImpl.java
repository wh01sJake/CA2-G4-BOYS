package amlengine.service.impl;

import amlengine.model.Alert;
import amlengine.model.Rule;
import amlengine.model.Transaction;
import amlengine.repository.AlertRepository;
import amlengine.service.AlertService;


import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class AlertServiceImpl implements AlertService {

    //Tracks alerts already egnerated in (in-memory only)
    private final Set<String> alertHashes = new HashSet<>();
    private final AlertRepository alertRepository;
    private final Map<String, Long> cooldownMap = new ConcurrentHashMap<>();
    private static final long COOLDOWN_TIME_MS = 10 * 60 * 1000; // 10 minutes

    // Inject repository through constructor
    public AlertServiceImpl(AlertRepository alertRepository) {
        this.alertRepository = alertRepository;
    }

    //this technique avoids spamming alerts for the same user + gives a 10 minute gap
    @Override
    public boolean isInCooldown(String sender, String ruleId) {
        String key = sender + "|" + ruleId;
        Long lastAlertTime = cooldownMap.get(key);

        if (lastAlertTime == null) {
            return false;
        }

        long currentTime = System.currentTimeMillis();
        return currentTime - lastAlertTime < COOLDOWN_TIME_MS;
    }


    @Override
    public void registerCooldown(String sender, String ruleId) {
        String key = sender + "|" + ruleId;
        cooldownMap.put(key, System.currentTimeMillis());
    }



    @Override
    public Alert generateAlert(Transaction txn, Rule rule, String reason){
        if (isDuplicateAlert(txn, reason)) {
            System.out.println("[AlertService] Duplicate alert skipped for sender: " + txn.getSender());
            return null;
        }

        Alert alert  =  new Alert();

        //Timestamp and readable alert ID
        String timestamp = new SimpleDateFormat("yyyyMMddHHmm").format(new Date());
        String uuidSuffix = UUID.randomUUID().toString().substring(0, 5).toUpperCase();
        String alertId = "ALERT-" + timestamp + "-" + uuidSuffix;

        alert.setAlertId(alertId);
        alert.setTransaction(txn);
        alert.setRule(rule);
        alert.setReason(reason);
        alert.setTimestamp(System.currentTimeMillis());

        //
        String reasonLower = reason != null ? reason.toLowerCase() : "";

        //Set alert type and priority based ont he input
        if (reason.toLowerCase().contains("sanction")) {
            alert.setAlertType("Sanctions");
            alert.setPriorityLevel("High");
        } else if(reason.toLowerCase().contains("rule")){
            alert.setAlertType("Rule Match");
            alert.setPriorityLevel("Medium");
        } else{
            alert.setAlertType("Generic");
            alert.setPriorityLevel("Low");
        }

        String alertKey = generateAlertKey(txn, reason);
        alertHashes.add(alertKey);

        String fingerprint = generateFingerPrint(txn, reason);
        alert.setFingerPrint(fingerprint);

        //persistent alert in postgreeSQL
        alertRepository.saveAlert(alert);

        System.out.println("[AlertService] Alert generated: " + alertId);
        return alert;
    }

    @Override
    public boolean isDuplicateAlert(Transaction txn, String reason) {
        String key = generateAlertKey(txn, reason);
        return alertHashes.contains(key);
    }

    private String generateAlertKey(Transaction txn, String reason){
        return txn.getSender() + "|" +
                txn.getReceiver() + "|" +
                txn.getAmount() + "|" +
                txn.getCurrency() + "|" +
                txn.getCountry() + "|" +
                reason.trim().toLowerCase();
    }

    // Optional: SHA-256 fingerprint (currently unused)
    public String generateFingerPrint(Transaction txn, String reason) {
        try {
            String data = txn.getSender() + "|" +
                    txn.getReceiver() + "|" +
                    txn.getAmount() + "|" +
                    txn.getCurrency() + "|" +
                    txn.getCountry() + "|" +
                    reason.trim().toLowerCase();

            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hashBytes = digest.digest(data.getBytes());

            StringBuilder sb = new StringBuilder();
            for (byte b : hashBytes) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Unable to generate fingerprint hash", e);
        }
    }
}
