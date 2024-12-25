package com.ran.erba.model.request;

import com.ran.erba.enums.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 25/12/2024, Wednesday
 **/

@Data
@Builder
public class RegisterRequest {
    @NotBlank(message = "name is required")
    @Size(min = 3, max = 25)
    private String name;

    @Email
    @NotBlank(message = "email is required")
    private String email;

    @NotBlank(message = "password is required")
    @Size(min = 8, max = 255)
    private String password;

    @NotNull(message = "role is required")
    private Role role;
}
