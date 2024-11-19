package com.erba.server.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DoctorUpdateRequest {

    @NotEmpty(message = "Doctor name is required")
    @NotNull(message = "Doctor name is required")
    private String name;

    private String imageUrl;
    private Boolean isActive;
}
