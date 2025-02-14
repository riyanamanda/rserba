package com.ran.erba.service.interfaces;

import com.ran.erba.model.entity.Post;
import com.ran.erba.model.request.PostCreateRequest;
import com.ran.erba.model.request.PostUpdateRequest;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 26/01/2025, Sunday
 **/

public interface PostService {

    Page<Post> findAll(int page, int size, boolean status);
    Post save(PostCreateRequest request);
    Post findById(Integer id);
    Post findBySlug(String slug);
    void update(String slug, PostUpdateRequest request);
    void delete(String slug);
}
