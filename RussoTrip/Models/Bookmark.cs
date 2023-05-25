using System;

namespace RussoTrip.Models;
public class Bookmark
{
    public int Id { get; set; }
    public ApplicationUser User { get; set; }
    public Excursion Excursion { get; set; }
}

