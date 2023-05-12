using System;
using RussoTrip.Models;

namespace RussoTrip.ViewModels
{
	public class ExcursionsViewModel
    {
        public IEnumerable<Excursion> Excursions { get; }
        public IEnumerable<City> Cities { get; }
        public int Page { get; }
        public int MaxPages { get; }

        public ExcursionsViewModel(IEnumerable<Excursion> excursions, IEnumerable<City> cities, int page, int maxPages)
        {
            Excursions = excursions;
            Cities = cities;
            Page = page;
            MaxPages = maxPages;
        }
    }
}

