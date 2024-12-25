package com.ran.erba.controller;

import com.ran.erba.model.dto.LoginDto;
import com.ran.erba.model.request.LoginRequest;
import com.ran.erba.model.request.RegisterRequest;
import com.ran.erba.model.response.WebDataResponse;
import com.ran.erba.model.response.WebResponse;
import com.ran.erba.service.interfaces.AuthenticationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 25/12/2024, Wednesday
 **/

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping(path = "/register", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> register(@Valid @RequestBody RegisterRequest request) {
        authenticationService.register(request);

        return ResponseEntity.status(HttpStatus.OK).body(WebResponse.builder()
                .code(HttpStatus.OK.value())
                .status(HttpStatus.OK.getReasonPhrase())
                .message("User registered successfully")
                .build());
    }

    @PostMapping(path = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> login(@Valid @RequestBody LoginRequest request) {
        String token = authenticationService.login(request);

        return ResponseEntity.status(HttpStatus.OK).body(WebDataResponse.builder()
                .code(HttpStatus.OK.value())
                .status(HttpStatus.OK.getReasonPhrase())
                .data(LoginDto.builder().token(token).build())
                .build());
    }
}
