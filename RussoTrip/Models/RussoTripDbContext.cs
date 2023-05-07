using System;
using Microsoft.EntityFrameworkCore;

namespace RussoTrip.Models
{
	public class RussoTripDbContext : DbContext
	{
		public RussoTripDbContext(DbContextOptions options) : base(options)
		{

		}

		public DbSet<City> Cities { get; set; }
		public DbSet<Excursion> Excursions { get; set; }
	}
}

