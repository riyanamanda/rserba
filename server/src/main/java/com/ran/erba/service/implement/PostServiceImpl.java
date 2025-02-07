package com.ran.erba.service.implement;

import com.ran.erba.model.entity.Category;
import com.ran.erba.model.entity.Post;
import com.ran.erba.model.entity.User;
import com.ran.erba.model.request.PostCreateRequest;
import com.ran.erba.model.request.PostUpdateRequest;
import com.ran.erba.repository.PostRepository;
import com.ran.erba.service.interfaces.CategoryService;
import com.ran.erba.service.interfaces.PostService;
import com.ran.erba.utils.SlugGenerator;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 26/01/2025, Sunday
 **/

@Service
@RequiredArgsConstructor
@Transactional
public class PostServiceImpl implements PostService {
    private final PostRepository postRepository;
    private final SlugGenerator slugGenerator;
    private final CategoryService categoryService;

    @Override
    public Page<Post> findAll(int page, int size, boolean status) {
        return postRepository.findAllByIsPublished(status, PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt")));
    }

    @Override
    public Post save(PostCreateRequest request) {
        String slug = slugGenerator.generate(request.getTitle());

        if (postRepository.findBySlug(slug).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Post with title: " + request.getTitle() + " already exists");
        }

        Category category = categoryService.findById(request.getCategoryId());
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        Post post = new Post();
        post.setTitle(request.getTitle());
        post.setSlug(slug);
        post.setContent(request.getContent());
        post.setCategory(category);
        post.setAuthor(user);

        return postRepository.save(post);
    }

    @Override
    public Post findBySlug(String slug) {
        return postRepository.findBySlug(slug).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found"));
    }

    @Override
    public void update(String slug, PostUpdateRequest request) {
        String newPostSlug = slugGenerator.generate(request.getTitle());

        if (!slug.equals(newPostSlug)) {
            if (postRepository.findBySlug(newPostSlug).isPresent()) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "Post with title: " + request.getTitle() + " already exists");
            }
        }

        Post post = postRepository.findBySlug(slug).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found"));

        post.setTitle(request.getTitle());
        post.setSlug(newPostSlug);
        post.setContent(request.getContent());
        post.setIsPublished(request.getIsPublished());

        postRepository.save(post);
    }

    @Override
    public void delete(String slug) {
        if (postRepository.findBySlug(slug).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found");
        }

        postRepository.deleteBySlug(slug);
    }
}
