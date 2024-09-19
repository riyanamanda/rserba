using Carter;
using server.Models.DTOs;
using server.Services.Interfaces;

namespace server.Endpoints;

public class CategoryEndpoints() : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("api/category");
        group.MapGet("/", async (ICategoryService categoryService) => await categoryService.GetAll());
        group.MapPost("/", async (ICategoryService categoryService, CreateCategoryDto request) => await categoryService.Create(request));
        group.MapGet("/{slug}", async (ICategoryService categoryService, string slug) => await categoryService.FindBySlug(slug));
        group.MapPatch("/{slug}", async (ICategoryService categoryService, string slug, UpdateCategoryDto request) => await categoryService.Update(slug, request));
        group.MapDelete("/{slug}", async (ICategoryService categoryService, string slug) => await categoryService.Delete(slug));
    }
}