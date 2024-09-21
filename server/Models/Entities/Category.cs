using System.Text.Json.Serialization;

namespace server.Models.Entities;

public class Category
{
    public int Id { get; set; }

    public required string Name { get; set; }

    public required string Slug { get; set; }

    [JsonPropertyName("created_at")]
    public DateTime CreatedAt { get; set; } = DateTime.Now;

    [JsonPropertyName("updated_at")]
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

}