package com.ran.erba.exception;

import com.ran.erba.model.response.ValidationError;
import com.ran.erba.model.response.WebResponse;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AccountStatusException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.multipart.support.MissingServletRequestPartException;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 26/12/2024, Thursday
 **/

@RestControllerAdvice
public class WebExceptionHandler {

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<WebResponse> handleException(ResponseStatusException exception) {
        return new ResponseEntity<>(WebResponse.builder().message(exception.getReason()).build(), exception.getStatusCode());
    }

    private String convertToSnakeCase(String input) {
        return input.replaceAll("/[-._]|(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/gm", "_").toLowerCase();
    }

    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ValidationError> handleConstraintViolationException(ConstraintViolationException exception) {
        Map<String, String> errors = new HashMap<>();
        exception.getConstraintViolations().forEach(violation -> {
            errors.put(convertToSnakeCase(violation.getPropertyPath().toString()), violation.getMessage());
        });

        return new ResponseEntity<>(ValidationError.builder().errors(errors).build(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MissingServletRequestPartException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ValidationError> handleMissingServletRequestPartException(MissingServletRequestPartException exception) {
        Map<String, String> errors = new HashMap<>();
        errors.put(convertToSnakeCase(exception.getRequestPartName()), exception.getMessage());

        return new ResponseEntity<>(ValidationError.builder().errors(errors).build(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ValidationError> handleValidationErrors(MethodArgumentNotValidException exception) {
        Map<String, String> errors = exception.getBindingResult().getFieldErrors().stream()
                .collect(HashMap::new, (map, fieldError) ->
                                map.put(convertToSnakeCase(fieldError.getField()), fieldError.getDefaultMessage()),
                        HashMap::putAll);

        return new ResponseEntity<>(ValidationError.builder().errors(errors).build(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({UsernameNotFoundException.class, BadCredentialsException.class})
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ResponseEntity<WebResponse> handleAuthenticationException(Exception exception) {
        return new ResponseEntity<>(WebResponse.builder().message("Email or Password is incorrect.").build(), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(AccountStatusException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ResponseEntity<WebResponse> handleAccountStatusException(AccountStatusException exception) {
        return new ResponseEntity<>(WebResponse.builder().message("Your account is disabled, please contact your administrator.").build(), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(SignatureException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ResponseEntity<WebResponse> handleInvalidSignatureException(SignatureException exception) {
        return new ResponseEntity<>(WebResponse.builder().message("JWT token does not match locally computed signature.").build(), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(ExpiredJwtException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ResponseEntity<WebResponse> handleExpiredJwtException(ExpiredJwtException exception) {
        return new ResponseEntity<>(WebResponse.builder().message("JWT token is expired.").build(), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(AccessDeniedException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public ResponseEntity<WebResponse> handleAccessDeniedException(AccessDeniedException exception) {
        return new ResponseEntity<>(WebResponse.builder().message("You are not allowed to access this page.").build(), HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<WebResponse> handleException(Exception exception) {
        return new ResponseEntity<>(WebResponse.builder().message(exception.getMessage()).build(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}




















