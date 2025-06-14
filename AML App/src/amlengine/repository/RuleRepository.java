package amlengine.repository;

import amlengine.enums.*;
import amlengine.model.*;
import java.util.*;
import java.math.BigDecimal;
import java.util.function.BiPredicate;

public class RuleRepository {

    private final List<Rule> rules = new ArrayList<>();

    public RuleRepository() {
        loadDefaultRules();
    }

    // Primary method for adding rules (with full control)
    public void addRule(String description, RuleSensitivity sensitivity,
                        BiPredicate<Transaction, BigDecimal> condition,
                        Set<String> tags) {
        if (description != null && sensitivity != null && condition != null) {
            rules.add(new Rule(description, sensitivity, condition, tags));
        }
    }

    // Overload for simple dynamic rule addition (no tags)
    public void addRule(String description, RuleSensitivity sensitivity,
                        BiPredicate<Transaction, BigDecimal> condition) {
        addRule(description, sensitivity, condition, null);
    }

    // Overload for tag-based addition (condition resolved by rule name)
    public void addRule(String description, RuleSensitivity sensitivity, String... tags) {
        BiPredicate<Transaction, BigDecimal> resolved = createConditionForRule(description);
        Set<String> tagSet = (tags != null) ? new HashSet<>(Arrays.asList(tags)) : new HashSet<>();
        addRule(description, sensitivity, resolved, tagSet);
    }

    //Backward-compatible shorthand
    public void addRule(String description, RuleSensitivity sensitivity) {
        addRule(description, sensitivity, (String[]) null);
    }

    // Dynamic condition resolver (basic examples)
    private BiPredicate<Transaction, BigDecimal> createConditionForRule(String description) {
        if ("High Value Transfer Rule".equalsIgnoreCase(description)) {
            return (txn, amt) -> amt.compareTo(new BigDecimal("10000")) > 0;
        }
        if ("Medium Risk Region Transfer".equalsIgnoreCase(description)) {
            return (txn, amt) -> {
                String country = txn.getCountry();
                return country != null &&
                        (country.equalsIgnoreCase("Turkey") || country.equalsIgnoreCase("Mexico"));
            };
        }
        if ("Low Value Routine Transfer".equalsIgnoreCase(description)) {
            return (txn, amt) -> amt.compareTo(new BigDecimal("500")) < 0;
        }

        // Default: always false
        return (txn, amt) -> false;
    }

    // Retrieve active rule list (read-only)
    public List<Rule> getAllRules() {
        return Collections.unmodifiableList(rules);
    }

    // Reset rule list
    public void clearRules() {
        rules.clear();
    }

    // Load your default internal rule definitions
    private void loadDefaultRules() {
        addRule("High Value Transfer Rule", RuleSensitivity.HIGH,
                (txn, amt) -> amt.compareTo(new BigDecimal("10000")) > 0,
                new HashSet<>(Arrays.asList("value", "priority", "large_txn")));

        addRule("Medium Risk Region Transfer", RuleSensitivity.MEDIUM,
                (txn, amt) -> {
                    String country = txn.getCountry();
                    return country != null &&
                            (country.equalsIgnoreCase("Turkey") ||
                                    country.equalsIgnoreCase("Mexico"));
                },
                new HashSet<>(Arrays.asList("geo", "moderate_risk", "region_specific")));

        addRule("Low Value Routine Transfer", RuleSensitivity.LOW,
                (txn, amt) -> amt.compareTo(new BigDecimal("500")) < 0,
                new HashSet<>(Arrays.asList("routine", "small_amount", "low_risk")));
    }
}
