package amlengine.repository;


import amlengine.model.Alert;

public interface AlertRepository {

    void saveAlert(Alert alert);
    boolean alertExistsByFingerPrint(String fingerprint);

}
