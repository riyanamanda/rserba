package com.erba.server.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class WebDataResponse {

    private Integer code;
    private String status;
    private Object data;
}
