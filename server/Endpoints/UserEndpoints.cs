using Carter;
using server.Models.DTOs;
using server.Services.Interfaces;

namespace server.Endpoints;

public class UserEndpoints : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("api/user");
        group.MapGet("/", async (IUserService userService) => await userService.GetAll());
        group.MapPost("/", async (IUserService userService, CreateUserDto request) => await userService.Create(request));
        group.MapGet("/{email}", async (IUserService userService, string email) => await userService.FindByEmail(email));
        group.MapPatch("/{email}", async (IUserService userService, string email, UpdateUserDto request) => await userService.Update(email, request));
        group.MapDelete("/{email}", async (IUserService userService, string email) => await userService.Delete(email));
    }
}