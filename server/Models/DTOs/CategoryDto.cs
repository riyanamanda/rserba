using System.ComponentModel.DataAnnotations;

namespace server.Models.DTOs;

public record CategoryDto(
    int Id,
    [Required, MaxLength(10)] string Name,
    [Required] string Slug,
    DateTime CreatedAt,
    DateTime UpdatedAt
);

public record CreateCategoryDto(
    [Required, MaxLength(10)] string Name
);

public record UpdateCategoryDto(
    [Required, MaxLength(10)] string Name
);