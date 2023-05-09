using System;
using RussoTrip.Models;

namespace RussoTrip.ViewModels
{
	public class ExcursionsViewModel
    {
        public IEnumerable<Excursion> Excursions { get; }

        public ExcursionsViewModel(IEnumerable<Excursion> excursions)
        {
            Excursions = excursions;
        }
    }
}

