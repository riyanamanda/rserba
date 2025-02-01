package com.ran.erba.service.interfaces;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 01/02/2025, Saturday
 **/

public interface UserDetailService extends UserDetailsService {
    UserDetails loadUserByUsername(String username);
}
