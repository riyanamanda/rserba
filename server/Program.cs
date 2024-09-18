using Carter;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Repositories.Implementations;
using server.Repositories.Interfaces;
using server.Services.Implementations;
using server.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var DbConn = builder.Configuration.GetConnectionString("Default");
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(DbConn);
});

builder.Services.AddCarter();

builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();
builder.Services.AddScoped<ICategoryService, CategoryService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("/", () => new
{
    title = "RS Ernaldi Bahar",
    created_by = "Riyan Amanda Nasution",
    github = "https://github.com/riyanamanda"
});

app.MapCarter();

app.UseHttpsRedirection();

app.Run();
