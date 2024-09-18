using server.Models.DTOs;
using server.Models.Entities;

namespace server.Models;

public static class ModelExtensions
{
    public static CategoryDto AsDto(this Category category)
    {
        return new CategoryDto(
            category.Id,
            category.Name,
            category.Slug,
            category.CreatedAt,
            category.UpdatedAt
        );
    }
}