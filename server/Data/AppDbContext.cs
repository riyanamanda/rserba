using Microsoft.EntityFrameworkCore;
using server.Models.Entities;

namespace server.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Category> Categories { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSnakeCaseNamingConvention();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
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
    }


}