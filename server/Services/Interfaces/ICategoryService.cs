using server.Models.DTOs;
using server.Repositories.Interfaces;

namespace server.Services.Interfaces;

public interface ICategoryService
{
    Task<object> GetAll(ICategoryRepository categoryRepository);
    Task<Response> Create(ICategoryRepository categoryRepository, CreateCategoryDto request);
    Task<Response> FindBySlug(ICategoryRepository categoryRepository, string slug);
    Task<Response> Update(ICategoryRepository categoryRepository, string slug, UpdateCategoryDto request);
    Task<Response> Delete(ICategoryRepository categoryRepository, string slug);
}