package com.ran.erba.model.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 26/12/2024, Thursday
 **/

@Data
@Builder
public class LoginRequest {
    @NotBlank(message = "email is required")
    @Email
    private String email;

    @NotBlank(message = "password is required")
    private String password;
}
