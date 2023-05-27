using System;

namespace RussoTrip.Models;
public class Comment
{
    public int Id { get; set; }
    public ApplicationUser User { get; set; }
    public Excursion Excursion { get; set; }
    public string Body { get; set; }
    public DateTime Date { get; set; }
}

