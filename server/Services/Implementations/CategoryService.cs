using System.Net;
using server.Models;
using server.Models.DTOs;
using server.Models.Entities;
using server.Repositories.Interfaces;
using server.Services.Interfaces;
using Slugify;

namespace server.Services.Implementations;

public class CategoryService : ICategoryService
{
    public async Task<object> GetAll(ICategoryRepository categoryRepository)
    {
        var categories = (await categoryRepository.GetAll()).Select(category => category.AsDto());
        return new DataResponse(HttpStatusCode.OK, "success", categories);
    }

    public async Task<Response> Create(ICategoryRepository categoryRepository, CreateCategoryDto request)
    {
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

    public Task<Response> FindBySlug(ICategoryRepository categoryRepository, string slug)
    {
        throw new NotImplementedException();
    }

    public Task<Response> Update(ICategoryRepository categoryRepository, string slug, UpdateCategoryDto request)
    {
        throw new NotImplementedException();
    }

    public Task<Response> Delete(ICategoryRepository categoryRepository, string slug)
    {
        throw new NotImplementedException();
    }
}