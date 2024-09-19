namespace server.Models.DTOs;

public record CategoryDto(
    int Id,
    string Name,
    string Slug,
    DateTime CreatedAt,
    DateTime UpdatedAt
);

public record CreateCategoryDto(
   string Name
);

public record UpdateCategoryDto(
   string Name
);