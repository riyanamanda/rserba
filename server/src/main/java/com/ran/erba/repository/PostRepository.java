package com.ran.erba.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ran.erba.model.entity.Post;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 26/01/2025, Sunday
 **/

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {
    Page<Post> findAllByIsPublished(Boolean isPublished, Pageable page);
    Optional<Post> findBySlug(String slug);
    void deleteBySlug(String slug);
}
