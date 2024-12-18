package com.erba.server.services;

import com.erba.server.dto.DoctorDto;
import com.erba.server.entities.Doctor;
import com.erba.server.mapper.DoctorMapper;
import com.erba.server.repository.DoctorRepository;
import com.erba.server.request.DoctorCreateRequest;
import com.erba.server.request.DoctorUpdateRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DoctorServiceImpl implements DoctorService {

    private final DoctorRepository doctorRepository;
    private final DoctorMapper doctorMapper;

    @Override
    public List<DoctorDto> findAll() {
        List<Doctor> doctors = doctorRepository.findAll();

        return doctors.stream()
                .map(doctorMapper)
                .collect(Collectors.toList());
    }

    @Override
    public void create(DoctorCreateRequest request) {
        Doctor doctor = new Doctor();
        doctor.setName(request.getName());
        doctorRepository.save(doctor);
    }

    @Override
    public void update(Integer id, DoctorUpdateRequest request) {
        Doctor doctor = doctorRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Doctor not found"));

        String imageUrl = (Objects.isNull(request.getImageUrl())) ? doctor.getImageUrl() : request.getImageUrl();
        Boolean isActive = (Objects.isNull(request.getIsActive())) ? doctor.getIsActive() : request.getIsActive();

        doctor.setName(request.getName());
        doctor.setImageUrl(imageUrl);
        doctor.setIsActive(isActive);
        doctorRepository.save(doctor);
    }

    @Override
    public DoctorDto findById(Integer id) {
        Doctor doctor = doctorRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Doctor not found"));

        return DoctorDto.builder()
                .id(doctor.getId())
                .name(doctor.getName())
                .imageUrl(doctor.getImageUrl())
                .isActive(doctor.getIsActive())
                .createdAt(doctor.getCreatedAt())
                .updatedAt(doctor.getUpdatedAt())
                .build();
    }

    @Override
    public void delete(Integer id) {
        Doctor doctor = doctorRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Doctor not found"));

        doctorRepository.delete(doctor);
    }
}
