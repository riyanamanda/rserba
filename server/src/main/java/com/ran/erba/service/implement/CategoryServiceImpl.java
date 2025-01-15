package com.ran.erba.service.implement;

import com.ran.erba.model.entity.Category;
import com.ran.erba.model.request.CategoryRequest;
import com.ran.erba.model.request.CategoryUpdateRequest;
import com.ran.erba.repository.CategoryRepository;
import com.ran.erba.service.interfaces.CategoryService;
import com.ran.erba.utils.SlugGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 15/01/2025, Wednesday
 **/

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;
    private final SlugGenerator slugGenerator;

    @Override
    public Page<Category> findAll(int page, int size) {
        return categoryRepository.findAll(PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt")));
    }

    @Override
    public void create(CategoryRequest request) {
        if (categoryRepository.findBySlug(slugGenerator.generateSlug(request.getName())).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Category '" + request.getName() + "' already exist");
        }

        Category category = new Category();
        category.setName(request.getName());
        category.setSlug(slugGenerator.generateSlug(request.getName()));

        categoryRepository.save(category);
    }

    @Override
    public Category findById(int id) {
        return categoryRepository.findById(id).orElse(null);
    }

    @Override
    public void update(CategoryUpdateRequest request) {

    }

    @Override
    public void delete(int id) {

    }
}
