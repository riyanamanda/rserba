package com.erba.server.models.dto.polyclinic;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PolyclinicRequestDto {

    @NotBlank(message = "Name is required")
    @Size(max = 20)
    private String name;

    @NotBlank(message = "Description is required")
    @Size(max = 100)
    private String description;
}
