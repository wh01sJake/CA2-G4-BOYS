package amlengine.service;

import amlengine.model.Alert;

public interface LoggerService {

    void logEvent(String eventType, String actor, String details);

    void logAlert(Alert alert);

}
