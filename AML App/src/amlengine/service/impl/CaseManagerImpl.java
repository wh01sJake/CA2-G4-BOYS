package amlengine.service.impl;

import amlengine.model.Alert;
import amlengine.service.CaseManager;

public class CaseManagerImpl implements CaseManager {

    @Override
    public void reviewAlert(Alert alert) {
        System.out.println("[CaseManager] Assigned alert for case review: " + alert.getAlertId());
    }
}
