package com.erba.server.mapper;

import com.erba.server.dto.DoctorDto;
import com.erba.server.entities.Doctor;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class DoctorMapper implements Function<Doctor, DoctorDto> {
    @Override
    public DoctorDto apply(Doctor doctor) {
        return new DoctorDto(
                doctor.getId(),
                doctor.getName(),
                doctor.getImageUrl(),
                doctor.getIsActive(),
                doctor.getCreatedAt(),
                doctor.getUpdatedAt()
        );
    }
}
