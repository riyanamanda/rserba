namespace server.Models.DTOs;

public record UserDto(
    int Id,
    string Name,
    string Email,
    DateTime CreatedAt,
    DateTime UpdatedAt
);

public record CreateUserDto(
    string Name,
    string Email,
    string Password
);