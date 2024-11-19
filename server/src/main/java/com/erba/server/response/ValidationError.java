package com.erba.server.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ValidationError {

    private Integer code;
    private String status;
    private Object errors;
}
