using Microsoft.AspNetCore.Mvc;
using RussoTrip.Interfaces;
using RussoTrip.Models;

namespace RussoTrip.Components
{
	public class ExcursionCard : ViewComponent
	{
        public IViewComponentResult Invoke(Excursion excursion)
        {
            return View(excursion);
        }
	}
}

