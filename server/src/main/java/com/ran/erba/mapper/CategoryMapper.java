package com.ran.erba.mapper;

import com.ran.erba.model.dto.CategoryDto;
import com.ran.erba.model.entity.Category;

import java.util.function.Function;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 15/01/2025, Wednesday
 **/

public class CategoryMapper implements Function<Category, CategoryDto> {
    @Override
    public CategoryDto apply(Category category) {
        return new CategoryDto(
                category.getId(),
                category.getName(),
                category.getSlug(),
                category.getCreatedAt(),
                category.getUpdatedAt()
        );
    }
}
