package com.erba.server.mapper;

import com.erba.server.dto.DoctorDto;
import com.erba.server.entities.Doctor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class DoctorMapper implements Function<Doctor, DoctorDto> {

    @Value("${base.url}")
    private String baseUrl;
    @Value("${project.doctor_image}")
    private String path;

    @Override
    public DoctorDto apply(Doctor doctor) {
        String imageUrl = baseUrl + "/" + path + doctor.getImageUrl();
        String image = doctor.getImageUrl() == null ? null : imageUrl;

        return new DoctorDto(
                doctor.getId(),
                doctor.getName(),
                image,
                doctor.getIsActive(),
                doctor.getCreatedAt(),
                doctor.getUpdatedAt()
        );
    }
}
