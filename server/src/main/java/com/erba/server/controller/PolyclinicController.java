package com.erba.server.controller;

import com.erba.server.models.dto.WebDataResponseDto;
import com.erba.server.models.dto.WebResponseDto;
import com.erba.server.models.dto.polyclinic.PolyclinicDto;
import com.erba.server.models.dto.polyclinic.PolyclinicRequestDto;
import com.erba.server.services.PolyclinicService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/polyclinic")
public class PolyclinicController {

    @Autowired
    private PolyclinicService polyclinicService;

    @GetMapping
    public WebDataResponseDto getAll() {
        List<PolyclinicDto> poly = polyclinicService.getAll();

        return WebDataResponseDto.<PolyclinicDto>builder()
                .code(HttpStatus.OK.value())
                .status(HttpStatus.OK.getReasonPhrase())
                .data(poly)
                .build();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public WebResponseDto create(@Valid @RequestBody PolyclinicRequestDto request) {
        polyclinicService.create(request);

        return WebResponseDto.builder()
                .code(HttpStatus.CREATED.value())
                .status(HttpStatus.CREATED.getReasonPhrase())
                .message("Polyclinic created")
                .build();
    }
}
