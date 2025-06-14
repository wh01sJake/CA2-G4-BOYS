package amlengine.core;

import amlengine.enums.IngestionStatus;
import amlengine.enums.RuleSensitivity;
import amlengine.model.IngestionResult;
import amlengine.model.Transaction;
import amlengine.model.User;
import amlengine.model.Alert;
import amlengine.service.*;
import amlengine.service.impl.*;
import amlengine.repository.*;

import java.math.BigDecimal;

public class Main {

    public static void main(String[] args) {

        System.out.println(" AML Engine Started...");

        // STEP 1: Central Rule Repository
        RuleRepository ruleRepository = new RuleRepository();

        // STEP 2: Initialize real service implementations
        TransactionService transactionService = new TransactionServiceImpl();
        RuleEngine ruleEngine = new RuleEngineImpl(ruleRepository);
        SanctionsChecker sanctionsChecker = new SanctionsCheckerImpl();
        AlertRepository alertRepository =new AlertRepositoryImpl();
        AlertService alertService = new AlertServiceImpl(alertRepository);
        ExchangeRateService exchangeRateService = new ExchangeRateServiceImpl();
        CaseManager caseManager = new CaseManagerImpl();
        LoggerService loggerService = new LoggerServiceImpl();
        AuthService authService = new AuthServiceImpl();
        RiskScoringService riskScoringService = new RiskScoringServiceImpl();

        // STEP 3: Construct the AML engine
        AMLEngine amlEngine = new AMLEngine(
                transactionService,
                ruleEngine,
                sanctionsChecker,
                alertService,
                exchangeRateService,
                caseManager,
                loggerService,
                riskScoringService
        );

        // STEP 4: Simulate login (this user must be defined in AuthServiceImpl)
        String username = "analystUser";
        String password = "analyst123";
        User user = authService.authenticate(username, password);

        if (user == null) {
            System.out.println(" Authentication failed.");
            return;
        }
        System.out.println(" Login successful. Role: " + user.getRole());

        // STEP 5: Create a sample transaction
        Transaction txn = new Transaction(
                "senderProd",
                "receiverProd",
                new BigDecimal("25000"),
                "USD",
                "Russia"
        );

        //STEP 6
        IngestionResult result = amlEngine.ingestTransaction(txn, user);

        //STEP 7 Ingest Transaction
        System.out.println(" Ingestion Status: " + result.getStatus());
        if (result.isAlertGenerated()) {
            System.out.println(" Alert Triggered: " + result.getAlertId());
        } else {
            System.out.println(" No alert raised.");
        }
    }
}
