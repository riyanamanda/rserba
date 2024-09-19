using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models.Entities;
using server.Repositories.Interfaces;

namespace server.Repositories.Implementations;

public class CategoryRepository(AppDbContext dbContext) : ICategoryRepository
{
    private readonly AppDbContext dbContext = dbContext;

    public async Task<IEnumerable<Category>> GetAll()
    {
        return await dbContext.Categories.ToListAsync();
    }

    public async Task Create(Category category)
    {
        await dbContext.AddAsync(category);
        await dbContext.SaveChangesAsync();
    }

    public async Task<Category?> FindBySlug(string slug)
    {
        return await dbContext.Categories.FirstOrDefaultAsync(c => c.Slug == slug);
    }

    public async Task Update(Category category)
    {
        await dbContext.SaveChangesAsync();
    }

    public async Task Delete(string slug)
    {
        await dbContext.Categories.Where(c => c.Slug == slug).ExecuteDeleteAsync();
    }
}