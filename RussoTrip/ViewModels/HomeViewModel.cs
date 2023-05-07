using System;
using RussoTrip.Models;

namespace RussoTrip.ViewModels
{
	public class HomeViewModel
	{
        public IEnumerable<Excursion> Excursions { get; }

        public HomeViewModel(IEnumerable<Excursion> excursions)
        {
            Excursions = excursions;
        }
    }
}

