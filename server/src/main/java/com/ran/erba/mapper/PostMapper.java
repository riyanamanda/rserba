package com.ran.erba.mapper;

import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ran.erba.model.dto.PostDto;
import com.ran.erba.model.entity.Post;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 27/01/2025, Monday
 **/

@Component
public class PostMapper implements Function<Post, PostDto> {
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private CategoryMapper categoryMapper;

    @Override
    public PostDto apply(Post post) {
        return new PostDto(
                post.getId(),
                post.getTitle(),
                post.getSlug(),
                categoryMapper.apply(post.getCategory()),
                post.getContent(),
                userMapper.apply(post.getAuthor()),
                post.getIsPublished(),
                post.getCreatedAt(),
                post.getUpdatedAt()
        );
    }
}
