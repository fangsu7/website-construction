package com.qcby.tyleaf_test.service;

import com.qcby.tyleaf_test.entity.User;
import com.qcby.tyleaf_test.util.DbutilInsertUser;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

@Service
public class userService {
    DbutilInsertUser dbutilInsertUser = new DbutilInsertUser();
    public User authenticate(String stuId, String password) {
        User user = null;
        try {
            user = dbutilInsertUser.getUserById(stuId);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
}
