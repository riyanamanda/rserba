package com.ran.erba.model.response;

import lombok.Builder;
import lombok.Data;
import org.springframework.http.HttpStatusCode;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 23/01/2025, Thursday
 **/

@Data
@Builder
public class WebResponse {
    private String message;
}
