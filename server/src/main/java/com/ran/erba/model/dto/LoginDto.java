package com.ran.erba.model.dto;

import lombok.Builder;

@Builder
public record LoginDto(
    String token
) {
}
