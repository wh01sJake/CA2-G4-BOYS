package amlengine.repository;


import amlengine.model.Alert;
import amlengine.model.Transaction;
import java.sql.*;

public class AlertRepositoryImpl implements AlertRepository {

    private static final String INSERT_SQL = "INSERT INTO alerts (alert_id, sender, receiver, amount,currency, country, reason, alert_type, priority_level, timestamp, fingerprint) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    private  static final String CHECK_SQL = "SELECT COUNT (*) FROM alerts WHERE FINGERPRINT = ?";

    @Override
    public void saveAlert(Alert alert) {
        try (Connection conn = DriverManager.getConnection(DBConfig.URL, DBConfig.USER, DBConfig.PASSWORD);
             PreparedStatement stmt = conn.prepareStatement(INSERT_SQL)) {

            Transaction txn = alert.getTransaction();

            stmt.setString(1, alert.getAlertId());
            stmt.setString(2, txn.getSender());
            stmt.setString(3, txn.getReceiver());
            stmt.setBigDecimal(4, txn.getAmount());
            stmt.setString(5, txn.getCurrency());
            stmt.setString(6, txn.getCountry());
            stmt.setString(7, alert.getReason());
            stmt.setString(8, alert.getAlertType());
            stmt.setString(9, alert.getPriorityLevel());
            stmt.setTimestamp(10, new Timestamp(alert.getTimestamp()));
            stmt.setString(11, alert.getFingerPrint());

            stmt.executeUpdate();
            System.out.println("[DB] Alert persisted successfully.");

        } catch (SQLException e) {
            System.err.println("[DB ERROR] " + e.getMessage());
        }
    }

    @Override
    public boolean alertExistsByFingerPrint(String fingerprint) {
        try (Connection conn = DriverManager.getConnection(DBConfig.URL, DBConfig.USER, DBConfig.PASSWORD);
             PreparedStatement stmt = conn.prepareStatement(CHECK_SQL)) {

            stmt.setString(1, fingerprint);
            try (ResultSet rs = stmt.executeQuery()) {
                return rs.next() && rs.getInt(1) > 0;
            }

        } catch (SQLException e) {
            System.err.println("[DB ERROR] " + e.getMessage());
        }
        return false;
    }

}


