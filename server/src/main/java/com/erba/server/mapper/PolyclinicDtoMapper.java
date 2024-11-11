package com.erba.server.mapper;

import com.erba.server.models.dto.polyclinic.PolyclinicDto;
import com.erba.server.models.entity.Polyclinic;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class PolyclinicDtoMapper implements Function<Polyclinic, PolyclinicDto> {
    @Override
    public PolyclinicDto apply(Polyclinic polyclinic) {
        return new PolyclinicDto(
                polyclinic.getId(),
                polyclinic.getName(),
                polyclinic.getSlug(),
                polyclinic.getDescription(),
                polyclinic.isActive(),
                polyclinic.getCreatedAt(),
                polyclinic.getUpdatedAt()
        );
    }
}
