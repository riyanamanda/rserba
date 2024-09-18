using System.Net;

namespace server.Models.DTOs;

public record DataResponse(
    HttpStatusCode Code,
    string Message,
    object Data
);

public record Response(
    HttpStatusCode Code,
    string Message
);