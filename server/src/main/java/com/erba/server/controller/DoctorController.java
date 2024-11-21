package com.erba.server.controller;

import com.erba.server.dto.DoctorDto;
import com.erba.server.request.DoctorCreateRequest;
import com.erba.server.request.DoctorUpdateRequest;
import com.erba.server.response.WebDataResponse;
import com.erba.server.response.WebResponse;
import com.erba.server.services.DoctorService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("doctor")
public class DoctorController {

    private final DoctorService doctorService;

    @GetMapping
    public ResponseEntity<WebDataResponse> getDoctor() {
        List<DoctorDto> doctors = doctorService.findAll();

        return ResponseEntity.status(HttpStatus.OK).body(WebDataResponse.builder()
                .code(HttpStatus.OK.value())
                .status(HttpStatus.OK.getReasonPhrase())
                .data(doctors)
                .build());
    }

    @PostMapping
    public ResponseEntity<WebResponse> create(@Valid @RequestBody DoctorCreateRequest request) {
        doctorService.create(request);

        return ResponseEntity.status(HttpStatus.CREATED).body(WebResponse.builder()
                .code(HttpStatus.CREATED.value())
                .status(HttpStatus.CREATED.getReasonPhrase())
                .message("Doctor created")
                .build());
    }

    @PatchMapping("{id}")
    public ResponseEntity<WebResponse> update(@Valid @PathVariable("id") Integer id, @RequestBody DoctorUpdateRequest request) {
        doctorService.update(id, request);

        return ResponseEntity.status(HttpStatus.ACCEPTED).body(WebResponse.builder()
                .code(HttpStatus.ACCEPTED.value())
                .status(HttpStatus.ACCEPTED.getReasonPhrase())
                .message("Doctor updated")
                .build()
        );
    }

    @DeleteMapping("{id}")
    public ResponseEntity<WebResponse> delete(@PathVariable("id") Integer id) {
        doctorService.delete(id);

        return ResponseEntity.status(HttpStatus.OK).body(WebResponse.builder()
                .code(HttpStatus.OK.value())
                .status(HttpStatus.OK.getReasonPhrase())
                .message("Doctor deleted")
                .build()
        );
    }
}
