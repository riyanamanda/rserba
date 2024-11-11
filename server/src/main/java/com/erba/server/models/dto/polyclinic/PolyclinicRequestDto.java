package com.erba.server.models.dto.polyclinic;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.validator.constraints.UniqueElements;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PolyclinicRequestDto {

    @NotBlank(message = "Name is required")
    @Max(20)
    @UniqueElements
    private String name;

    @NotBlank(message = "Description is required")
    @Max(100)
    private String description;
}
