package amlengine.service.impl;

import amlengine.service.SanctionsChecker;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class SanctionsCheckerImpl implements SanctionsChecker {

    private static final Set<String> sanctionedEntities = new HashSet<>(Arrays.asList("badActor", "OFAC_USER"));
    private static final Set<String> restrictedCountries = new HashSet<>(Arrays.asList("Russia", "Iran", "North Korea"));

    @Override
    public boolean isSanctionedEntity(String name) {
        return sanctionedEntities.contains(name);
    }

    @Override
    public boolean checkCountry(String country) {
        return restrictedCountries.contains(country);
    }
}
