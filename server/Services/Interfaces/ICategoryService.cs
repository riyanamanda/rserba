using server.Models.DTOs;
using server.Repositories.Interfaces;

namespace server.Services.Interfaces;

public interface ICategoryService
{
    Task<DataResponse> GetAll(ICategoryRepository categoryRepository);
    Task<Response> Create(ICategoryRepository categoryRepository, CreateCategoryDto request);
    Task FindBySlug(ICategoryRepository categoryRepository, string slug);
    Task Update(ICategoryRepository categoryRepository, string slug, UpdateCategoryDto request);
    Task Delete(ICategoryRepository categoryRepository, string slug);
}