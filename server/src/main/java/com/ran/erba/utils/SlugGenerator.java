package com.ran.erba.utils;

import com.github.slugify.Slugify;
import org.springframework.stereotype.Component;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 15/01/2025, Wednesday
 **/

@Component
public class SlugGenerator {

    public String generateSlug(String input) {
        final Slugify slg = Slugify.builder().build();
        final String result = slg.slugify(input);

        return slg.slugify(result);
    }
}
