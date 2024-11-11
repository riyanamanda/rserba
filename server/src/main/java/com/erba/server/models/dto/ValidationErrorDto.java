package com.erba.server.models.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ValidationErrorDto {
    private Integer code;
    private String status;
    private Object errors;
}

