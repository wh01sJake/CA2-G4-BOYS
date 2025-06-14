package amlengine.service;

public interface SanctionsChecker {

    boolean isSanctionedEntity(String name);
    boolean checkCountry(String county);

}
