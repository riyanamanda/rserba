package com.ran.erba.controller;

import com.ran.erba.model.request.UserCreateRequest;
import com.ran.erba.model.response.WebResponse;
import com.ran.erba.service.interfaces.UserService;
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
 * @since 01/02/2025, Saturday
 **/

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/user")
public class UserController {

    private final UserService userService;

    @PostMapping(
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<WebResponse> create(@Valid @RequestBody UserCreateRequest request) {
        userService.save(request);

        return new ResponseEntity<>(WebResponse.builder().message("User created").build(), HttpStatus.CREATED);
    }
}
