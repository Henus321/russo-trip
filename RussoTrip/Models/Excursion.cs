using System;

namespace RussoTrip.Models;
public class Excursion
{
	public int Id { get; set; }
	public string Name { get; set; } = string.Empty;
	public string? Description { get; set; }
	public string? Markdown { get; set; }
	public string? ImageUrl { get; set; }
	public DateTime Date { get; set; }
	public City City { get; set; } = default!;
    public ApplicationUser Author { get; set; }
}

