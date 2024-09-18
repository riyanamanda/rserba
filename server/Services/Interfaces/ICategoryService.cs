using server.Models.DTOs;

namespace server.Services.Interfaces;

public interface ICategoryService
{
    Task<object> GetAll();
    Task<object> Create(CreateCategoryDto request);
    Task<object> FindBySlug(string slug);
    Task<object> Update(string slug, UpdateCategoryDto request);
    Task<object> Delete(string slug);
}