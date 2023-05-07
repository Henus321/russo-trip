using System;
using RussoTrip.Models;

namespace RussoTrip.Interfaces
{
	public interface IExcursionRepository
	{
		IEnumerable<Excursion> GetExcursions { get; }
		Excursion? GetExcursionById(int excursionId);
	}
}

