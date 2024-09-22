using server.Models.Entities;

namespace server.Repositories.Interfaces;

public interface IUserRepository
{
    Task<IEnumerable<User>> GetAll();
    Task Create(User user);
}