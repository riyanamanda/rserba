package com.erba.server.services;

import com.erba.server.models.dto.polyclinic.PolyclinicDto;
import com.erba.server.models.dto.polyclinic.PolyclinicRequestDto;

import java.util.List;

public interface PolyclinicService {

    List<PolyclinicDto> getAll();

    void create(PolyclinicRequestDto request);
}
