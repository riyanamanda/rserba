package com.ran.erba.service.interfaces;

import com.ran.erba.model.entity.User;
import io.jsonwebtoken.Claims;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.function.Function;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 25/12/2024, Wednesday
 **/

public interface JwtService {
    String generateToken(User user);
    String extractUsername(String token);
    boolean isTokenValid(String token, UserDetails user);
    <T> T extractClaim(String token, Function<Claims, T> resolver);
}
