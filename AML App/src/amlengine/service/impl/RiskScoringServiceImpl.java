package amlengine.service.impl;

import amlengine.enums.RiskScore;
import amlengine.model.Rule;
import amlengine.model.Transaction;
import amlengine.service.RiskScoringService;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.*;

public class RiskScoringServiceImpl implements RiskScoringService {

    private static final BigDecimal HIGH_AMOUNT_THRESHOLD = new BigDecimal("100000");
    private static final BigDecimal MEDIUM_AMOUNT_THRESHOLD = new BigDecimal("25000");

    private static final int HIGH_AMOUNT_SCORE = 25;
    private static final int HIGH_RISK_COUNTRY_SCORE = 25;
    private static final int FREQUENT_SENDER_SCORE = 25;
    private static final int MANUAL_FLAG_SCORE = 25;

    private static final Set<String> SANCTIONED_COUNTRIES = loadSanctionedCountries();

    private static Set<String> loadSanctionedCountries() {
        Set<String> countries = new HashSet<>();
        String filePath = "data/sanctions/high_risk_countries.txt"; // Adjust if outside working dir

        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = reader.readLine()) != null) {
                if (!line.trim().isEmpty()) {
                    countries.add(line.trim());
                }
            }
        } catch (IOException e) {
            System.err.println("Failed to load sanctioned countries: " + e.getMessage());
        }
        return countries;
    }

    @Override
    public RiskScore assessRisk(Transaction txn) {
        int score = calculateRiskScore(txn);

        if(score >= 75) return RiskScore.HIGH;
        else if(score >= 40) return RiskScore.MEDIUM;
        else return RiskScore.LOW;
    }

    @Override
    public int calculateRiskScore(Transaction txn) {
        int score = 0;

        //Base criteria for scoring
        if (isHighAmount(txn)) score += HIGH_AMOUNT_SCORE;
        if (isSanctionedCountry(txn)) score += HIGH_RISK_COUNTRY_SCORE;
        if (isFrequentSender(txn)) score += FREQUENT_SENDER_SCORE;
        if (hasManualFlag(txn)) score += MANUAL_FLAG_SCORE;


        return Math.min(score, 100);
    }

    @Override
    public int calculateRiskScore(Transaction txn, Rule rule) {
        int score = calculateRiskScore(txn);

        if(rule != null && rule.getSensitivity() != null) {
            switch(rule.getSensitivity()) {
                case HIGH: score += 20; break;
                case MEDIUM: score += 10; break;
                case LOW: score += 5; break;
            }
        }
        return Math.min(score, 100);
    }

    @Override
    public Set<String> getHighRiskCountries() {
        return SANCTIONED_COUNTRIES;
    }

    private boolean isHighAmount(Transaction txn) {
        return txn.getAmount().compareTo(HIGH_AMOUNT_THRESHOLD) >= 0;
    }

    private boolean isSanctionedCountry(Transaction txn) {
        String country = txn.getCountry();
        return country != null && SANCTIONED_COUNTRIES.contains(country.trim());
    }

    private boolean isFrequentSender(Transaction txn) {
        //placeholder: integrate with historical frequency Tracker
        return false;
    }

    private boolean hasManualFlag(Transaction txn) {
        return txn.getMetadata() != null && containsKeyIgnoreCase(txn.getMetadata(), "flagged");
    }

    private boolean containsKeyIgnoreCase(Map<String, String> map, String key) {
        return map.keySet().stream().anyMatch(k -> k.equalsIgnoreCase(key));
    }

}
