package com.ran.erba.model.request;

import jakarta.validation.constraints.NotBlank;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 15/01/2025, Wednesday
 **/

public class CategoryUpdateRequest {
    @NotBlank(message = "Name is required")
    private String name;
}
