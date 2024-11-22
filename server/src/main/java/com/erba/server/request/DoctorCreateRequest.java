package com.erba.server.request;

import com.fasterxml.jackson.annotation.JsonProperty;
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
public class DoctorCreateRequest {

    @NotEmpty(message = "Doctor name is required")
    @NotNull(message = "Doctor name is required")
    private String name;

    @JsonProperty("image_url")
    private String imageUrl;
}
