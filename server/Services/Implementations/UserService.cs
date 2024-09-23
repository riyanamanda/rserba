using System.Net;
using FluentValidation.Results;
using server.Models.DTOs;
using server.Models.Entities;
using server.Repositories.Interfaces;
using server.Services.Interfaces;
using server.Validator.UserValidator;

namespace server.Services.Implementations;

public class UserService(IUserRepository userRepository) : IUserService
{
    private readonly IUserRepository userRepository = userRepository;

    public async Task<object> GetAll()
    {
        var users = (await userRepository.GetAll()).Select(user => user.AsDto());

        return new DataResponse(HttpStatusCode.OK, "success", users);
    }

    public async Task<object> Create(CreateUserDto request)
    {
        var validator = new CreateUserValidator();
        ValidationResult result = validator.Validate(request);
        if (!result.IsValid)
        {
            return Results.ValidationProblem(result.ToDictionary(), statusCode: (int)HttpStatusCode.UnprocessableEntity);
        }

        var existingUser = await userRepository.FindByEmail(request.Email);
        if (existingUser is not null)
        {
            return new Response(HttpStatusCode.UnprocessableEntity, "User with that email already exists");
        }

        var password = BCrypt.Net.BCrypt.HashPassword(request.Password);
        User user = new()
        {
            Name = request.Name,
            Email = request.Email,
            Password = password
        };

        await userRepository.Create(user);

        return new Response(HttpStatusCode.Created, "User has been created successfully");
    }

    public async Task<object> FindByEmail(string email)
    {
        var user = await userRepository.FindByEmail(email);
        if (user is null)
        {
            return new Response(HttpStatusCode.NotFound, "User tidak ditemukan");
        }

        return new DataResponse(HttpStatusCode.OK, "success", user.AsDto());
    }

    public async Task<object> Update(string email, UpdateUserDto request)
    {
        var validator = new UpdateUserValidator();
        ValidationResult result = validator.Validate(request);
        if (!result.IsValid)
        {
            return Results.ValidationProblem(result.ToDictionary(), statusCode: (int)HttpStatusCode.UnprocessableEntity);
        }

        if (request.Email != email)
        {
            var existingUser = await userRepository.FindByEmail(request.Email);
            if (existingUser is not null)
            {
                return new Response(HttpStatusCode.UnprocessableEntity, "Email already use");
            }
        }

        User? user = await userRepository.FindByEmail(email);
        if (user is null)
        {
            return new Response(HttpStatusCode.NotFound, "User not found");
        }

        user.Name = request.Name;
        user.Email = request.Email;

        await userRepository.Update(user);

        return new Response(HttpStatusCode.Accepted, "User has been updated successfully");
    }

    public async Task<object> Delete(string email)
    {
        var existingUser = await userRepository.FindByEmail(email);
        if (existingUser is null)
        {
            return new Response(HttpStatusCode.NotFound, "User not found");
        }

        await userRepository.Delete(email);

        return new Response(HttpStatusCode.Accepted, "User has been deleted successfully");
    }
}