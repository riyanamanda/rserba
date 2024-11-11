package com.erba.server.models.dto.polyclinic;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Timestamp;

public record PolyclinicDto(
        Integer id,
        String name,
        String slug,
        String description,
        Boolean is_active,

        @JsonProperty("created_at")
        Timestamp createdAt,

        @JsonProperty("updated_at")
        Timestamp updatedAt
) {
}
