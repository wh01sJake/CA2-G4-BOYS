package amlengine.loader;

import amlengine.enums.*;
import amlengine.model.*;
import amlengine.repository.*;
import com.fasterxml.jackson.databind.*;

import java.util.*;
import java.math.*;
import java.io.*;
import java.util.function.BiPredicate;

public class RuleLoader {
    private final RuleRepository ruleRepository;

    public RuleLoader(RuleRepository ruleRepository) {
        this.ruleRepository = ruleRepository;
    }

    public void loadFromJson(String filePath) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(new File(filePath));
            for (JsonNode ruleNode : root) {
                String description = ruleNode.get("description").asText();
                RuleSensitivity sensitivity = RuleSensitivity.valueOf(ruleNode.get("sensitivity").asText().toUpperCase());

                Set<String> tags = new HashSet<>();
                for (JsonNode tag : ruleNode.get("tags")) {
                    tags.add(tag.asText());
                }

                // Example hardcoded logic dispatcher
                BiPredicate<Transaction, BigDecimal> condition = createConditionFromType(ruleNode.get("type").asText());

                if (condition != null) {
                    ruleRepository.addRule(description, sensitivity, condition, tags);
                }
            }
        } catch (Exception e) {
            System.err.println("[ERROR] Failed to load rules from JSON: " + e.getMessage());
        }
    }

    // Replace this dispatcher with more flexible logic if needed
    private BiPredicate<Transaction, BigDecimal> createConditionFromType(String type) {
        return switch (type.toLowerCase()) {
            case "high_value" -> (txn, amt) -> amt.compareTo(new BigDecimal("10000")) > 0;
            case "medium_risk_country" -> (txn, amt) -> {
                String country = txn.getCountry();
                return country != null && (country.equalsIgnoreCase("Turkey") || country.equalsIgnoreCase("Mexico"));
            };
            case "low_value" -> (txn, amt) -> amt.compareTo(new BigDecimal("500")) < 0;
            default -> null;
        };
    }
}

