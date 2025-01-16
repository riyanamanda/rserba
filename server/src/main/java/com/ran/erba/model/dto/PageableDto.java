package com.ran.erba.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://id.linkedin.com/in/riyan-amanda/in">...</a>
 * @since 09/12/2024
 **/

@Builder
public record PageableDto(
        @JsonProperty("current_page")
        int currentPage,
        @JsonProperty("per_page")
        int perPage,
        @JsonProperty("is_first")
        boolean isFirst,
        @JsonProperty("is_last")
        boolean isLast,
        int total,
        Object content
) {
}
