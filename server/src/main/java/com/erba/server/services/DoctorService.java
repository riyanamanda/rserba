package com.erba.server.services;

import com.erba.server.dto.DoctorDto;
import com.erba.server.request.DoctorCreateRequest;
import com.erba.server.request.DoctorUpdateRequest;

import java.util.List;

public interface DoctorService {

    List<DoctorDto> findAll();

    void create(DoctorCreateRequest request);

    void update(Integer id, DoctorUpdateRequest request);

    DoctorDto findById(Integer id);

    void delete(Integer id);
}
