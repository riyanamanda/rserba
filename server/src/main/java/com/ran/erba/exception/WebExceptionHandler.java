package com.ran.erba.exception;

import com.ran.erba.model.response.ValidationError;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 26/12/2024, Thursday
 **/

@ControllerAdvice
public class WebExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ValidationError> handleValidationErrors(MethodArgumentNotValidException exception) {
        Map<String, String> errors = new HashMap<>();
        exception.getBindingResult().getAllErrors().forEach((error) -> {
            FieldError fe = (FieldError) error;
            errors.put(fe.getField(), error.getDefaultMessage());
        });

        return ResponseEntity.status(exception.getStatusCode())
                .body(ValidationError.builder()
                        .code(exception.getStatusCode().value())
                        .status(exception.getStatusCode().toString().toUpperCase().substring(4))
                        .errors(errors)
                        .build()
                );
    }
}
