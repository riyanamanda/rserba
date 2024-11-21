package com.erba.server.exception;

import com.erba.server.response.ValidationError;
import com.erba.server.response.WebResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class WebExceptionHandler {

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<WebResponse> apiResponse(ResponseStatusException exception) {
        return ResponseEntity.status(exception.getStatusCode()).body(
                WebResponse.builder()
                        .code(exception.getStatusCode().value())
                        .status(exception.getBody().getTitle())
                        .message(exception.getReason())
                        .build()
        );
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ValidationError> handleValidationErrors(MethodArgumentNotValidException exception) {
        Map<String, String> errors = new HashMap<>();
        exception.getBindingResult().getAllErrors().forEach((error) -> {
            FieldError fe = (FieldError) error;
            errors.put(fe.getField(), error.getDefaultMessage());
        });

        return ResponseEntity.status(exception.getStatusCode())
                .body(
                        ValidationError.builder()
                                .code(exception.getStatusCode().value())
                                .status(HttpStatus.BAD_REQUEST.name())
                                .errors(errors)
                                .build()
                );
    }
}
