package com.erba.server.models.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WebResponseDto {

    private Integer code;
    private String status;
    private String message;
}
