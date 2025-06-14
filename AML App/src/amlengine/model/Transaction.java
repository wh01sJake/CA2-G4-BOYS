package amlengine.model;

import amlengine.enums.RiskScore;

import java.math.BigDecimal;
import java.util.Map;

public class Transaction {

    //declare variables
    private String sender;
    private String receiver;
    private BigDecimal amount;
    private String currency;
    private String country;
    private RiskScore riskScore;
    private Map<String, String> metadata;


    //constructor
    public Transaction(String sender, String receiver,BigDecimal amount, String currency, String country) {
        this.sender = sender;
        this.receiver = receiver;
        this.amount = amount;
        this.currency = currency;
        this.country = country;
    }

    //Setter
    public void setRiskScore(RiskScore riskScore) {
        this.riskScore = riskScore;
    }

    public void setMetadata(Map<String, String> metadata) {
        this.metadata = metadata;
    }


    //getters
    public String getSender() {
        return sender;
    }

    public String getReceiver() {
        return receiver;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public String getCurrency() {
        return currency;
    }

    public String getCountry() {
        return country;
    }

    public RiskScore getRiskScore() {
        return riskScore;
    }
    public Map<String, String> getMetadata() {
        return metadata;
    }

}
