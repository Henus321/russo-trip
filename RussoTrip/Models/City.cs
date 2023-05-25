using System;

namespace RussoTrip.Models;
public class City
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public List<Excursion>? Excursions { get; set; }
}

