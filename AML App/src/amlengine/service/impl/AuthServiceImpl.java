package amlengine.service.impl;

import amlengine.service.AuthService;
import amlengine.model.User;

import java.util.*;

public class AuthServiceImpl implements AuthService {

    private final Map<String, String> userStore = new HashMap<>();
    private final Map<String, String> roles = new HashMap<>();

    public AuthServiceImpl() {

        //username : password
        userStore.put("adminUser", "admin123");
        userStore.put("analystUser", "analyst123");
        userStore.put("viewerUser", "viewer123");
        userStore.put("supervisorUser", "supervisor123");

        //username : role
        roles.put("adminUser", "admin");
        roles.put("analystUser", "analyst");
        roles.put("viewerUser", "viewer");
        roles.put("supervisorUser", "supervisor");
    }

    @Override
    public User authenticate (String username, String password) {
        if(userStore.containsKey(username) && userStore.get(username).equals(password)) {
            return new User(username, roles.get(username));
        }
        return null;
    }

    @Override
    public boolean authorize (User user, String requiredRole) {
        if(user == null || user.getRole() == null) {
            return false;
        }
        return user.getRole().equalsIgnoreCase(requiredRole);
    }
}
