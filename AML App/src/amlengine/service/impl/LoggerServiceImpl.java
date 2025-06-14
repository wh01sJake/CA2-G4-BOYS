package amlengine.service.impl;

import amlengine.model.Alert;
import amlengine.service.LoggerService;


public class LoggerServiceImpl implements LoggerService{

    @Override
    public void logEvent(String eventType, String actor, String details) {
        System.out.printf("[LOG] [%s] [%s]: %s%n", eventType, actor, details);
    }

    @Override
    public void logAlert(Alert alert){
        System.out.printf("[ALERT] ID: %s | Type: %s | Priority: %s | Reason: %s | Timestamp: %s | Sender: %s | Receiver: %s%n",
                alert.getAlertId(),
                alert.getAlertType(),
                alert.getPriorityLevel(),
                alert.getReason(),
                alert.getTimestamp(),
                alert.getTransaction().getSender(),
                alert.getTransaction().getReceiver()
        );
    }
}
