package com.erba.server.services;

import com.erba.server.dto.DoctorDto;
import com.erba.server.entities.Doctor;
import com.erba.server.mapper.DoctorMapper;
import com.erba.server.repository.DoctorRepository;
import com.erba.server.request.DoctorCreateRequest;
import com.erba.server.request.DoctorUpdateRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
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

    }

    @Override
    public void update(Doctor doctor, DoctorUpdateRequest request) {

    }

    @Override
    public DoctorDto findById(Long id) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
