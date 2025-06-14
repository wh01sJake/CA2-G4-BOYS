package amlengine.service;

import amlengine.model.User;

public interface AuthService {
    User authenticate (String username, String password);
    boolean authorize (User user, String requiredRole);
}
