package com.ran.erba.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ran.erba.enums.Role;
import lombok.Builder;

import java.time.LocalDateTime;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 05/01/2025, Sunday
 **/

@Builder
public record UserDto(
        Integer id,
        String name,
        String email,
        Role role,
        @JsonProperty("is_active")
        boolean isActive,
        @JsonProperty("created_at")
        LocalDateTime createdAt,
        @JsonProperty("updated_at")
        LocalDateTime updatedAt
) {
}
