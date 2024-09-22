using Carter;

namespace server.Endpoints;

public class UserEndpoints : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("user");
        group.MapPost("/register", () => { });
    }
}