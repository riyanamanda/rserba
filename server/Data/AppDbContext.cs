using Microsoft.EntityFrameworkCore;
using server.Models.Entities;

namespace server.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Category> Categories { get; set; }
    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        optionsBuilder
            .UseSqlServer()
            .UseSnakeCaseNamingConvention();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Category>().HasData(
            new
            {
                Id = 1,
                Name = "Kesehatan",
                Slug = "kesehatan",
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now
            }
        );
        modelBuilder.Entity<User>().HasData(
            new
            {
                Id = 1,
                Name = "Riyan Amanda",
                Email = "ryant.n92@gmail.com",
                Password = "password"
            }
        );
    }
}