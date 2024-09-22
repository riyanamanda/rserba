using server.Models.Entities;

namespace server.Models.DTOs;

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

    public static UserDto AsDto(this User user)
    {
        return new UserDto(
            user.Id,
            user.Name,
            user.Email,
            user.CreatedAt,
            user.UpdatedAt
        );
    }
}