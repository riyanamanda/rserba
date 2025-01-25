package com.ran.erba.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ran.erba.mapper.CategoryMapper;
import com.ran.erba.model.dto.PageableDto;
import com.ran.erba.model.entity.Category;
import com.ran.erba.model.request.CategoryCreateRequest;
import com.ran.erba.model.request.CategoryUpdateRequest;
import com.ran.erba.model.response.WebResponse;
import com.ran.erba.service.interfaces.CategoryService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://id.linkedin.com/in/riyan-amanda/in">...</a>
 * @since 09/12/2024
 **/

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/category")
public class CategoryController {

    private final CategoryService categoryService;
    private final CategoryMapper categoryMapper;

    @GetMapping(
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Object> getAll(
            @Valid
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "5") int size
    ) {
        Page<Category> categories = categoryService.findAll(page, size);
        return new ResponseEntity<>(
                PageableDto.builder()
                        .currentPage(page)
                        .perPage(size)
                        .isFirst(categories.isFirst())
                        .isLast(categories.isLast())
                        .total(categories.getTotalPages())
                        .content(categories.getContent().stream().map(categoryMapper))
                        .build()
                , HttpStatus.OK);
    }

    @PostMapping(
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<WebResponse> create(@Valid @RequestBody CategoryCreateRequest request) {
        categoryService.create(request);

        return ResponseEntity.status(HttpStatus.CREATED).body(
                WebResponse.builder().message("Category created").build()
        );
    }

    @GetMapping(
            path = "/{slug}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Object> findBySlug(@PathVariable String slug) {
        Category category = categoryService.findBySlug(slug);

        return new ResponseEntity<>(categoryMapper.apply(category), HttpStatus.OK);
    }

    @PatchMapping(
            path = "/{slug}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<WebResponse> update(@Valid @PathVariable String slug, @RequestBody CategoryUpdateRequest request) {
        categoryService.update(slug, request);

        return new ResponseEntity<>(WebResponse.builder().message("Category updated").build(), HttpStatus.NO_CONTENT);
    }

    @DeleteMapping(
            path = "/{slug}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<WebResponse> delete(@PathVariable String slug) {
        categoryService.delete(slug);

        return new ResponseEntity<>(WebResponse.builder().message("Category deleted").build(), HttpStatus.ACCEPTED);
    }
}
