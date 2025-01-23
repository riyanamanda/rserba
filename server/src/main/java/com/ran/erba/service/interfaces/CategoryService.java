package com.ran.erba.service.interfaces;

import com.ran.erba.model.entity.Category;
import com.ran.erba.model.request.CategoryCreateRequest;
import com.ran.erba.model.request.CategoryUpdateRequest;
import org.springframework.data.domain.Page;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 15/01/2025, Wednesday
 **/

public interface CategoryService {
    Page<Category> findAll(int page, int size);
    void create(CategoryCreateRequest request);
    Category findBySlug(String slug);
    void update(String slug, CategoryUpdateRequest request);
    void delete(String slug);
}
