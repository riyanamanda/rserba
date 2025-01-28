package com.ran.erba.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ran.erba.model.entity.Category;
import com.ran.erba.model.entity.User;
import lombok.Builder;

import java.time.LocalDateTime;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 27/01/2025, Monday
 **/

@Builder
public record PostDto(
        Integer id,
        String title,
        String slug,
        CategoryDto category,
        String content,
        UserDto author,
        @JsonProperty("is_published")
        boolean isPublished,
        @JsonProperty("created_at")
        LocalDateTime createdAt,
        @JsonProperty("updated_at")
        LocalDateTime updatedAt
) {
}
