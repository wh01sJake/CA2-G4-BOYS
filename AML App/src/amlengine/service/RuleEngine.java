package amlengine.service;

import amlengine.model.Rule;
import amlengine.model.Transaction;
import java.math.BigDecimal;
import java.util.List;
public interface RuleEngine {
    List<Rule> getActiveRules();
    boolean applyRule(Transaction txn, Rule rule, BigDecimal normalizedAmount);

}
