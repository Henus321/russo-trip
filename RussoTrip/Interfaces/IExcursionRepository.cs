using System;
using RussoTrip.Models;

namespace RussoTrip.Interfaces
{
	public interface IExcursionRepository
	{
		IEnumerable<Excursion> GetExcursions { get; }
		IEnumerable<Excursion> GetLastSixExcursions { get; }
        IEnumerable<Excursion>? GetExcursionsByCity(string city);
		Excursion? GetExcursionById(int excursionId);

    }
}

