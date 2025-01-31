package com.ran.erba.service.implement;

import com.ran.erba.model.entity.Category;
import com.ran.erba.model.request.CategoryCreateRequest;
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
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 15/01/2025, Wednesday
 **/

@Service
@RequiredArgsConstructor
@Transactional
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;
    private final SlugGenerator slugGenerator;

    @Override
    public Page<Category> findAll(int page, int size) {
        return categoryRepository.findAll(PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt")));
    }

    @Override
    public void save(CategoryCreateRequest request) {
        if (categoryRepository.findBySlug(slugGenerator.generate(request.getName())).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Category '" + request.getName() + "' already exist");
        }

        Category category = new Category();
        category.setName(request.getName());
        category.setSlug(slugGenerator.generate(request.getName()));

        categoryRepository.save(category);
    }

    @Override
    public Category findById(int id) {
        return categoryRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Category '" + id + "' not found"));
    }

    @Override
    public Category findBySlug(String slug){
        return categoryRepository.findBySlug(slug).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Category '" + slug + "' does not exist")
        );
    }

    @Override
    public void update(String slug, CategoryUpdateRequest request) {
        Category category = categoryRepository.findBySlug(slug).orElse(null);
        String newSlug = slugGenerator.generate(request.getName());

        // Check if category is present
        if (category == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Category '" + slug + "' not found");
        }

        // Check if category and new category is not match
        if (!newSlug.equals(category.getSlug())) {
            if (categoryRepository.findBySlug(newSlug).isPresent()) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "Category '" + newSlug + "' already exist");
            }
        }

        category.setName(request.getName());
        category.setSlug(slugGenerator.generate(request.getName()));

        categoryRepository.save(category);
    }

    @Override
    public void delete(String slug) {
        if (categoryRepository.findBySlug(slug).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found");
        }

        categoryRepository.deleteBySlug(slug);
    }
}
