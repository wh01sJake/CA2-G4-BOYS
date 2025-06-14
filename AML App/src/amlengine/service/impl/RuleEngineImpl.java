package amlengine.service.impl;

import amlengine.model.Rule;
import amlengine.model.Transaction;
import amlengine.repository.RuleRepository;
import amlengine.service.RuleEngine;

import java.math.BigDecimal;
import java.util.*;

public class RuleEngineImpl implements RuleEngine {

    private final RuleRepository ruleRepository;

    public RuleEngineImpl(RuleRepository ruleRepository) {
        this.ruleRepository = ruleRepository;
    }

    @Override
    public List<Rule> getActiveRules() {
        return ruleRepository.getAllRules();
    }

    @Override
    public boolean applyRule(Transaction txn, Rule rule, BigDecimal normalizedAmount) {
        return rule != null && rule.appliesTo(txn, normalizedAmount);
    }
}
