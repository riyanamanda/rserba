package com.erba.server.controller;

import com.erba.server.dto.DoctorDto;
import com.erba.server.response.WebDataResponse;
import com.erba.server.services.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("doctor")
public class DoctorController {

    private final DoctorService doctorService;

    @GetMapping
    public ResponseEntity<WebDataResponse> getDoctor() {
        List<DoctorDto> doctors = doctorService.findAll();

        return ResponseEntity.ok(WebDataResponse.builder()
                .code(HttpStatus.OK.value())
                .status(HttpStatus.OK.getReasonPhrase())
                .data(doctors)
                .build());
    }
}
