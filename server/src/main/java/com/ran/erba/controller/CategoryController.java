package com.ran.erba.controller;

import com.ran.erba.mapper.CategoryMapper;
import com.ran.erba.model.dto.PageableDto;
import com.ran.erba.model.entity.Category;
import com.ran.erba.model.request.CategoryCreateRequest;
import com.ran.erba.model.request.CategoryUpdateRequest;
import com.ran.erba.service.interfaces.CategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<ObjectError> create(@Valid @RequestBody CategoryCreateRequest request) {
        categoryService.save(request);
        return new ResponseEntity<>(HttpStatus.CREATED);
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
    public ResponseEntity<Object> update(@PathVariable String slug, @Valid @RequestBody CategoryUpdateRequest request) {
        categoryService.update(slug, request);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(
            path = "/{slug}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Object> delete(@PathVariable String slug) {
        categoryService.delete(slug);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
