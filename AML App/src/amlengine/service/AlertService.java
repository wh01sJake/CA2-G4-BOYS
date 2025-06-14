package amlengine.service;

import amlengine.model.Alert;
import amlengine.model.Transaction;
import amlengine.model.Rule;

public interface AlertService {

    void registerCooldown(String sender, String ruleId);

    Alert generateAlert(Transaction txn, Rule rule, String reason);
    boolean isDuplicateAlert(Transaction txn, String reason);
    String generateFingerPrint(Transaction txn, String reason);
    boolean isInCooldown(String sender, String ruleId);

}
