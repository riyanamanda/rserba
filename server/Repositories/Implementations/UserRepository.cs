using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models.Entities;
using server.Repositories.Interfaces;

namespace server.Repositories.Implementations;

public class UserRepository(AppDbContext dbContext) : IUserRepository
{
    private readonly AppDbContext dbContext = dbContext;

    public async Task<IEnumerable<User>> GetAll()
    {
        return await dbContext.Users.ToListAsync();
    }

    public async Task Create(User user)
    {
        await dbContext.AddAsync(user);
        await dbContext.SaveChangesAsync();
    }

    public async Task<User?> FindByEmail(string email)
    {
        return await dbContext.Users.FirstOrDefaultAsync(u => u.Email == email);
    }

    public async Task Update(User user)
    {
        await dbContext.SaveChangesAsync();
    }

    public async Task Delete(string email)
    {
        await dbContext.Users.Where(u => u.Email == email).ExecuteDeleteAsync();
    }
}