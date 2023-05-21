using System;
using Microsoft.AspNetCore.Mvc;
using RussoTrip.Models;

namespace RussoTrip.Components
{
	public class CityPicker : ViewComponent
	{
        public IViewComponentResult Invoke(IEnumerable<string> cities)
        {
            return View(cities);
        }
    }
}

