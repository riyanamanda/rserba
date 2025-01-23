package com.ran.erba.model.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 15/01/2025, Wednesday
 **/

@Data
@Builder
public class CategoryCreateRequest {
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50)
    private String name;
}
