using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using server.Data;
using server.Repositories.Implementations;
using server.Repositories.Interfaces;
using server.Services.Implementations;
using server.Services.Interfaces;

namespace server.Extensions;

public static class DependencyInjection
{
    public static IServiceCollection AddDbConnection(this IServiceCollection services, IConfiguration configuration)
    {
        var DbConn = configuration.GetConnectionString("Default");
        services.AddDbContext<AppDbContext>(options =>
        {
            options.UseSqlServer(DbConn);
        });

        return services;
    }

    public static IServiceCollection AddServicesAndRepositories(this IServiceCollection services)
    {
        services.AddScoped<ICategoryRepository, CategoryRepository>();
        services.AddScoped<ICategoryService, CategoryService>();
        services.AddScoped<IUserRepository, UserRepository>();

        return services;
    }

    public static IServiceCollection AddAuth(this IServiceCollection services, IConfiguration configurations)
    {
        services.AddAuthentication(opt =>
        {
            opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            opt.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        })
        .AddJwtBearer(opt =>
        {
            opt.SaveToken = false;
            opt.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configurations["Jwt:Key"]!))
            };
        });

        return services;
    }
}