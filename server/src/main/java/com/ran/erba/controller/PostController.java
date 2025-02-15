package com.ran.erba.controller;

import com.ran.erba.mapper.PostMapper;
import com.ran.erba.model.dto.PageableDto;
import com.ran.erba.model.entity.Post;
import com.ran.erba.model.request.PostCreateRequest;
import com.ran.erba.model.request.PostUpdateRequest;
import com.ran.erba.service.interfaces.PostService;
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
 * @since 27/01/2025, Monday
 **/

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/post")
public class PostController {
    private final PostService postService;
    private final PostMapper postMapper;

    @GetMapping(
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Object> getAll(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "true") boolean status
    ) {
        Page<Post> posts = postService.findAll(page, size, status);
        return new ResponseEntity<>(
                PageableDto.builder()
                        .currentPage(page)
                        .perPage(size)
                        .isFirst(posts.isFirst())
                        .isLast(posts.isLast())
                        .total(posts.getTotalPages())
                        .content(posts.getContent().stream().map(postMapper))
                        .build()
                , HttpStatus.OK);
    }

    @PostMapping(
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Object> create(@Valid @RequestBody PostCreateRequest request) {
        Post post = postService.save(request);
        return new ResponseEntity<>(postMapper.apply(post), HttpStatus.CREATED);
    }

    @GetMapping(
            path = "/{slug}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Object> findBySlug(@PathVariable String slug) {
        Post post = postService.findBySlug(slug);

        return new ResponseEntity<>(postMapper.apply(post), HttpStatus.OK);
    }

    @PatchMapping(
            path = "/{slug}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Object> update(@PathVariable String slug, @Valid @RequestBody PostUpdateRequest request) {
        postService.update(slug, request);

        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @DeleteMapping(
            path = "/{slug}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Object> delete(@PathVariable String slug) {
        postService.delete(slug);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
