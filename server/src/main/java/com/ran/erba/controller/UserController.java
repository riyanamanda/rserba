package com.ran.erba.controller;

import com.ran.erba.mapper.UserMapper;
import com.ran.erba.model.dto.PageableDto;
import com.ran.erba.model.entity.User;
import com.ran.erba.model.request.UserCreateRequest;
import com.ran.erba.model.request.UserUpdateRequest;
import com.ran.erba.service.interfaces.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    private final UserMapper userMapper;

    @GetMapping(
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Object> findAll(
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "5") int size
    ) {
        Page<User> users = userService.findAll(page, size);

        return new ResponseEntity<>(
                PageableDto.builder()
                        .currentPage(page)
                        .perPage(size)
                        .isFirst(users.isFirst())
                        .isLast(users.isLast())
                        .total(users.getTotalPages())
                        .content(users.getContent().stream().map(userMapper))
                        .build()
                , HttpStatus.OK
        );
    }

    @PostMapping(
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Object> create(@Valid @RequestBody UserCreateRequest request) {
        userService.save(request);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping(
            path = "{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Object> update(@PathVariable Integer id, @Valid @RequestBody UserUpdateRequest request) {
        userService.update(id, request);

        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
