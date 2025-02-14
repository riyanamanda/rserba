package com.ran.erba.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ran.erba.model.entity.Category;
import com.ran.erba.model.request.CategoryCreateRequest;
import com.ran.erba.utils.SlugGenerator;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
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
@TestMethodOrder(OrderAnnotation.class)
class CategoryControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private SlugGenerator slugGenerator;

    @Test
    @WithMockUser(username = "admin@email.com", roles = "SUPERADMIN")
    @Order(value = 1)
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

    @Test
    @Order(value = 2)
    void test_get_all_categories() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/category")
                )
                .andExpect(MockMvcResultMatchers.status().is(HttpStatus.OK.value()));
    }

    @Test
    @Order(value = 3)
    void test_find_category_by_slug() throws Exception {
        String slug = "test-save-category";

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/category/" + slug)
                )
                .andExpect(MockMvcResultMatchers.status().is(HttpStatus.OK.value()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").exists())
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("Test Save Category"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.slug").value(slug));
    }

    @Test
    @WithMockUser(username = "admin@email.com", roles = "SUPERADMIN")
    @Order(value = 4)
    void test_update_category() throws Exception {
        String newCategoryName = "Test Category Update";

        CategoryCreateRequest request = new CategoryCreateRequest();
        request.setName(newCategoryName);

        mockMvc.perform(MockMvcRequestBuilders
                        .patch("/api/category/test-save-category")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request))
                )
                .andExpect(MockMvcResultMatchers.status().is(HttpStatus.OK.value()));
    }

    @Test
    @WithMockUser(username = "admin@email.com", roles = "SUPERADMIN")
    @Order(value = 5)
    void test_delete_category_by_slug() throws Exception {
        String slug = "test-category-update";

        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/api/category/" + slug)
                )
                .andExpect(MockMvcResultMatchers.status().is(HttpStatus.OK.value()));
    }
}