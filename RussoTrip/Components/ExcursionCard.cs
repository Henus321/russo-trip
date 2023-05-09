using System;
using Microsoft.AspNetCore.Mvc;
using RussoTrip.Interfaces;

namespace RussoTrip.Components
{
	public class ExcursionCard : ViewComponent
	{
        public IViewComponentResult Invoke(Models.Excursion excursion)
        {
            return View(excursion);
        }
	}
}

