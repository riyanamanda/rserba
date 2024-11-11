package com.erba.server.services.implementations;

import com.erba.server.mapper.PolyclinicDtoMapper;
import com.erba.server.models.dto.polyclinic.PolyclinicDto;
import com.erba.server.repository.PolyclinicRepository;
import com.erba.server.services.PolyclinicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PolyclinicServiceImpl implements PolyclinicService {

    @Autowired
    private PolyclinicRepository polyclinicRepository;

    @Autowired
    private PolyclinicDtoMapper polyclinicDtoMapper;

    @Override
    public List<PolyclinicDto> getAll() {
        return polyclinicRepository.findAll()
                .stream()
                .map(polyclinicDtoMapper)
                .collect(Collectors.toList());
    }
}
