package com.ran.erba.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 04/01/2025, Saturday
 **/

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Value("${spring.application.url.frontend}")
    private String FRONTEND_URL;

    @Override
    public void addCorsMappings(@NonNull CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(FRONTEND_URL)
                .allowedHeaders("Authorization", "Content-Type", "Accept", "Origin")
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE")
                .allowCredentials(true);
    }
}
