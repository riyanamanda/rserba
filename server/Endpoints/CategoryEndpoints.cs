using Carter;
using server.Models.DTOs;
using server.Repositories.Interfaces;
using server.Services.Interfaces;

namespace server.Endpoints;

public class CategoryEndpoints : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("api/category");

        group.MapGet("/", async (
            ICategoryService categoryService,
            ICategoryRepository categoryRepository) =>
        {
            return await categoryService.GetAll(categoryRepository);
        });

        group.MapPost("/", async (
            ICategoryService categoryService,
            ICategoryRepository categoryRepository,
            CreateCategoryDto request
            ) =>
        {

            return await categoryService.Create(categoryRepository, request);
        });

    }
}