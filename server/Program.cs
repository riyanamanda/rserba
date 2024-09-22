using Carter;
using server.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCarter();
builder.Services.AddDbConnection(builder.Configuration)
                .AddServicesAndRepositories();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("/", () => new
{
    title = "RS Ernaldi Bahar",
    created_by = "Riyan Amanda Nasution, M.Kom",
    github = "https://github.com/riyanamanda"
});

app.MapCarter();
app.UseHttpsRedirection();
app.Run();
