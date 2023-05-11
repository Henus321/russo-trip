using System;
using RussoTrip.Models;

namespace RussoTrip.ViewModels
{
	public class ExcursionsViewModel
    {
        public IEnumerable<Excursion> Excursions { get; }
        public IEnumerable<City> Cities { get; }

        public ExcursionsViewModel(IEnumerable<Excursion> excursions, IEnumerable<City> cities)
        {
            Excursions = excursions;
            Cities = cities;
        }
    }
}

