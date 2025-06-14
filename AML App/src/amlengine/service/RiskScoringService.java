package amlengine.service;

import amlengine.enums.RiskScore;
import amlengine.model.Rule;
import amlengine.model.Transaction;

import java.util.Set;

public interface RiskScoringService {

    Set<String> getHighRiskCountries();

    RiskScore assessRisk(Transaction txn);

    int calculateRiskScore(Transaction txn);

    int calculateRiskScore(Transaction txn, Rule rule);
}
