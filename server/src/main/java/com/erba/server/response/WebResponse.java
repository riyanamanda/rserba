package com.erba.server.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class WebResponse {

    private Integer code;
    private String status;
    private String message;
}
