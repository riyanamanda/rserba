package com.ran.erba.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ran.erba.model.entity.Category;
import com.ran.erba.utils.SlugGenerator;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 06/02/2025, Thursday
 **/

@SpringBootTest
@AutoConfigureMockMvc
class CategoryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private SlugGenerator slugGenerator;

    @Test
    @WithMockUser(username = "admin@email.com", roles = "SUPERADMIN")
    void test_create_category() throws Exception {
        String categoryName = "Test Save Category";

        Category category = new Category();
        category.setName(categoryName);
        category.setSlug(slugGenerator.generate(categoryName));

        mockMvc.perform(MockMvcRequestBuilders
                        .post("/api/category")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(category))
                )
                .andExpect(MockMvcResultMatchers.status().is(HttpStatus.CREATED.value()));
    }
}