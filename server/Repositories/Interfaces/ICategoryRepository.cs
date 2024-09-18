using server.Models.Entities;

namespace server.Repositories.Interfaces;

public interface ICategoryRepository
{
    Task<IEnumerable<Category>> GetAll();
    Task Create(Category category);
    Task<Category?> FindBySlug(string slug);
    Task Update(Category category);
    Task Delete(string slug);
}