using Carter;
using server.Models.DTOs;
using server.Services.Interfaces;

namespace server.Endpoints;

public class CategoryEndpoints(ICategoryService categoryService) : ICarterModule
{
    private readonly ICategoryService categoryService = categoryService;

    public void AddRoutes(IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("api/category");
        group.MapGet("/", async () => await categoryService.GetAll());
        group.MapPost("/", async (CreateCategoryDto request) => await categoryService.Create(request));
        group.MapGet("/{slug}", async (string slug) => await categoryService.FindBySlug(slug));
        group.MapPatch("/{slug}", async (string slug, UpdateCategoryDto request) => await categoryService.Update(slug, request));
        group.MapDelete("/{slug}", async (string slug) => await categoryService.Delete(slug));
    }
}