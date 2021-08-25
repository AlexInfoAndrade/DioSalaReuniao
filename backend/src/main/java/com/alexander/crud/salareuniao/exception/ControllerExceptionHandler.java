package com.alexander.crud.salareuniao.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@ControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(RegisterNotFoundException.class)
    public ResponseEntity<?> registerNotFound(RegisterNotFoundException ex,
                                              WebRequest request) {

        ErrorDetails err = new ErrorDetails(
                LocalDateTime.now(),
                ex.getMessage(),
                request.getDescription(true)
        );

        return new ResponseEntity<>(err, HttpStatus.NOT_FOUND);
    }

//    @ExceptionHandler(Exception.class)
//    public ResponseEntity<?> genericException(Exception ex,
//                                              WebRequest request) {
//
//        ErrorDetails err = new ErrorDetails(
//                LocalDateTime.now(),
//                ex.getMessage(),
//                "Generic error with out handler. " +
//                request.getDescription(true)
//        );
//
//        return new ResponseEntity<>(err, HttpStatus.INTERNAL_SERVER_ERROR);
//    }
}
