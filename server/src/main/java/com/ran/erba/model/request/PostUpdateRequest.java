package com.ran.erba.model.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 26/01/2025, Sunday
 **/

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostUpdateRequest {

    @NotBlank(message = "Title is required")
    @Size(min = 10, max = 50)
    private String title;

    @NotNull(message = "Category is required")
    @JsonProperty("category_id")
    private Integer categoryId;

    @NotBlank(message = "Content is required")
    @Size(min = 10)
    private String content;
}
