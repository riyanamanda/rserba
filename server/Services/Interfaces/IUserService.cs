using server.Models.DTOs;
using server.Models.Entities;

namespace server.Services.Interfaces;

public interface IUserService
{
    Task<object> GetAll();
    Task<object> Create(CreateUserDto request);
    Task<object> FindByEmail(string email);
    Task<object> Update(string email, UpdateUserDto request);
    Task<object> Delete(string email);
}