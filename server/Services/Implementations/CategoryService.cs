using System.Net;
using server.Models;
using server.Models.DTOs;
using server.Models.Entities;
using server.Repositories.Interfaces;
using server.Services.Interfaces;
using server.Validator;
using Slugify;

namespace server.Services.Implementations;

public class CategoryService(ICategoryRepository categoryRepository) : ICategoryService
{
    private readonly ICategoryRepository categoryRepository = categoryRepository;

    public async Task<object> GetAll()
    {
        var categories = (await categoryRepository.GetAll()).Select(category => category.AsDto());
        return new DataResponse(HttpStatusCode.OK, "success", categories);
    }

    public async Task<object> Create(CreateCategoryDto request)
    {
        var validator = new CategoryValidator();
        var result = validator.Validate(request);
        if (!result.IsValid)
        {
            return Results.ValidationProblem(result.ToDictionary(), statusCode: (int)HttpStatusCode.UnprocessableEntity);
        }

        SlugHelper helper = new();
        var slug = helper.GenerateSlug(request.Name);

        var category = await categoryRepository.FindBySlug(slug);
        if (category is not null)
        {
            return new Response(HttpStatusCode.BadRequest, "Category already exists");
        }

        Category newCategory = new()
        {
            Name = request.Name,
            Slug = slug
        };

        await categoryRepository.Create(newCategory);

        return new Response(HttpStatusCode.Created, "Category has been created successfully");
    }

    public Task<object> FindBySlug(string slug)
    {
        throw new NotImplementedException();
    }

    public Task<object> Update(string slug, UpdateCategoryDto request)
    {
        throw new NotImplementedException();
    }

    public Task<object> Delete(string slug)
    {
        throw new NotImplementedException();
    }
}