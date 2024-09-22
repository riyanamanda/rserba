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
}