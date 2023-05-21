using System;
using Microsoft.AspNetCore.Identity;

namespace RussoTrip.Models;
public class ApplicationUser : IdentityUser
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
}