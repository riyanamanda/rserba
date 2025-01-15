package com.ran.erba.repository;

import com.ran.erba.model.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 15/01/2025, Wednesday
 **/

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
    Optional<Category> findByName(String name);
    Optional<Category> findBySlug(String slug);
}
