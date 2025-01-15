package com.ran.erba.model.response;

import lombok.Builder;
import lombok.Data;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 26/12/2024, Thursday
 **/

@Data
@Builder
public class ValidationError {
    private Object errors;
}
