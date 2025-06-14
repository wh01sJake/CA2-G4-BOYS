package amlengine.service;

import amlengine.model.Transaction;
import java.util.List;

public interface TransactionService {

    void saveTransaction(Transaction txn);
    List<Transaction> getAllTransaction();
}
