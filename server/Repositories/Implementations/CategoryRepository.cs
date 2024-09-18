using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models.Entities;
using server.Repositories.Interfaces;

namespace server.Repositories.Implementations;

public class CategoryRepository(AppDbContext dbContext) : ICategoryRepository
{
    private readonly AppDbContext _dbContext = dbContext;

    public async Task<IEnumerable<Category>> GetAll()
    {
        return await _dbContext.Categories.ToListAsync();
    }

    public async Task Create(Category category)
    {
        await _dbContext.AddAsync(category);
        await _dbContext.SaveChangesAsync();
    }

    public async Task<Category?> FindBySlug(string slug)
    {
        return await _dbContext.Categories.FirstOrDefaultAsync(c => c.Slug == slug);
    }

    public async Task Update(Category category)
    {
        await _dbContext.AddAsync(category);
        await _dbContext.SaveChangesAsync();
    }

    public async Task Delete(string slug)
    {
        await _dbContext.Categories.Where(c => c.Slug == slug)
                                   .ExecuteDeleteAsync();
    }
}