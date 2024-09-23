using System.Net;
using FluentValidation.Results;
using server.Models;
using server.Models.DTOs;
using server.Models.Entities;
using server.Repositories.Interfaces;
using server.Services.Interfaces;
using server.Validator.CategoryValidator;
using Slugify;

namespace server.Services.Implementations;

public class CategoryService(ICategoryRepository categoryRepository) : ICategoryService
{
    public async Task<object> GetAll()
    {
        var categories = (await categoryRepository.GetAll()).Select(category => category.AsDto());
        return new DataResponse(HttpStatusCode.OK, "success", categories);
    }

    public async Task<object> Create(CreateCategoryDto request)
    {
        var validator = new CreateCategoryValidator();
        var result = validator.Validate(request);
        if (!result.IsValid)
        {
            return Results.ValidationProblem(result.ToDictionary(), statusCode: (int)HttpStatusCode.UnprocessableEntity);
        }

        SlugHelper helper = new();
        var slug = helper.GenerateSlug(request.Name);

        Category? existingCategory = await categoryRepository.FindBySlug(slug);
        if (existingCategory is not null)
        {
            return new Response(HttpStatusCode.BadRequest, "Category already exists");
        }

        Category category = new()
        {
            Name = request.Name,
            Slug = slug
        };

        await categoryRepository.Create(category);

        return new Response(HttpStatusCode.Created, "Category has been created successfully");
    }

    public async Task<object> FindBySlug(string slug)
    {
        Category? category = await categoryRepository.FindBySlug(slug);
        if (category is null)
        {
            return new Response(HttpStatusCode.UnprocessableEntity, "Category not found!");
        }

        return new DataResponse(HttpStatusCode.OK, "success", category.AsDto());
    }

    public async Task<object> Update(string slug, UpdateCategoryDto request)
    {
        var validator = new UpdateCategoryValidator();
        ValidationResult result = validator.Validate(request);
        if (!result.IsValid)
        {
            return Results.ValidationProblem(result.ToDictionary(), statusCode: (int)HttpStatusCode.UnprocessableEntity);
        }

        Category? existingCategory = await categoryRepository.FindBySlug(slug);
        if (existingCategory is null)
        {
            return new Response(HttpStatusCode.NotFound, "Category not found");
        }

        SlugHelper helper = new();
        existingCategory.Name = request.Name;
        existingCategory.Slug = helper.GenerateSlug(request.Name);
        await categoryRepository.Update(existingCategory);

        return new Response(HttpStatusCode.OK, "Category has been updated successfully");
    }

    public async Task<object> Delete(string slug)
    {
        Category? existingCategory = await categoryRepository.FindBySlug(slug);
        if (existingCategory is null)
        {
            return new Response(HttpStatusCode.NotFound, "Category not found");
        }

        await categoryRepository.Delete(slug);

        return new Response(HttpStatusCode.OK, "Category has been deleted");
    }
}