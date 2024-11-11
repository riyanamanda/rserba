package com.erba.server.exception;

import com.erba.server.models.dto.ValidationErrorDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class ExceptionHandler {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @org.springframework.web.bind.annotation.ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ValidationErrorDto> handleValidationErrors(MethodArgumentNotValidException exception) {
        Map<String, String> errors = new HashMap<>();
        exception.getBindingResult().getAllErrors().forEach((error) -> {
            FieldError fe = (FieldError) error;
            errors.put(fe.getField(), error.getDefaultMessage());
        });

        return ResponseEntity.status(exception.getStatusCode())
                .body(
                        ValidationErrorDto.<String>builder()
                                .code(exception.getStatusCode().value())
                                .status(HttpStatus.BAD_REQUEST.name())
                                .errors(errors)
                                .build()
                );
    }
}
