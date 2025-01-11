package com.ran.erba.service.interfaces;

import com.ran.erba.model.entity.User;
import com.ran.erba.model.request.LoginRequest;
import com.ran.erba.model.request.RegisterRequest;
import jakarta.servlet.http.HttpServletRequest;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 26/12/2024, Thursday
 **/

public interface AuthenticationService {
    void register(RegisterRequest request);
    String login(LoginRequest request);
    User current(HttpServletRequest request);
}
