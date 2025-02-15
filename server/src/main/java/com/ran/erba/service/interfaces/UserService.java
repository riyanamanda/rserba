package com.ran.erba.service.interfaces;

import com.ran.erba.model.entity.User;
import com.ran.erba.model.request.UserCreateRequest;
import com.ran.erba.model.request.UserUpdateRequest;
import org.springframework.data.domain.Page;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 01/02/2025, Saturday
 **/

public interface UserService {
    Page<User> findAll(int page, int size);
    void save(UserCreateRequest request);
    void update(Integer userId, UserUpdateRequest request);
}
