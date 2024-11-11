package com.erba.server.models.dto;

import lombok.Builder;

@Builder
public record WebDataResponseDto(
        Integer code,
        String status,
        Object data
) {

}
