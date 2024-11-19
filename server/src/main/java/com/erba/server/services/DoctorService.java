package com.erba.server.services;

import com.erba.server.dto.DoctorDto;
import com.erba.server.entities.Doctor;
import com.erba.server.request.DoctorCreateRequest;
import com.erba.server.request.DoctorUpdateRequest;

import java.util.List;

public interface DoctorService {

    List<DoctorDto> findAll();
    void create(DoctorCreateRequest request);
    void update(Doctor doctor, DoctorUpdateRequest request);
    DoctorDto findById(Long id);
    void delete(Long id);
}
