package com.alexander.crud.salareuniao.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RegisterNotFoundException extends RuntimeException {

    public RegisterNotFoundException(Long id) {
        super("Register not found with id::"+id);
    }
}
