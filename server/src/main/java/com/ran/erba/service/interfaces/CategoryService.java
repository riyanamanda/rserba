package com.ran.erba.service.interfaces;

import com.ran.erba.model.entity.Category;
import com.ran.erba.model.request.CategoryRequest;
import com.ran.erba.model.request.CategoryUpdateRequest;
import org.springframework.data.domain.Page;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 15/01/2025, Wednesday
 **/

public interface CategoryService {
    Page<Category> findAll(int page, int size);
    void create(CategoryRequest request);
    Category findById(int id);
    void update(int id, CategoryUpdateRequest request);
    void delete(int id);
}
