package com.ran.erba.utils;

import jakarta.validation.*;
import org.springframework.stereotype.Component;

import java.util.Set;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 02/02/2025, Sunday
 **/

@Component
public class RequestValidator {

    private final ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
    private final Validator validator = factory.getValidator();

    public void validate(Object data) {
        Set<ConstraintViolation<Object>> constraintViolations = validator.validate(data);
        if (!constraintViolations.isEmpty()) {
            throw new ConstraintViolationException(constraintViolations);
        }
    }
}
