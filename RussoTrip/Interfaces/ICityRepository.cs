using System;
using RussoTrip.Models;

namespace RussoTrip.Interfaces
{
	public interface ICityRepository
	{
		IEnumerable<City> GetCities { get; }
	}
}

