package com.ran.erba.service.interfaces;

import com.ran.erba.model.request.LoginRequest;
import com.ran.erba.model.request.RegisterRequest;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 26/12/2024, Thursday
 **/

public interface AuthenticationService {
    void register(RegisterRequest request);
    String login(LoginRequest request);
}
