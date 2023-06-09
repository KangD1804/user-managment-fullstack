package com.khang.backendspring.exception;

public class UserNotFoundException extends Exception {
    public UserNotFoundException(Long id) {
        super("User with id: " +id + " not found");
    }
}
