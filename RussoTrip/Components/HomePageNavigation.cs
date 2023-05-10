using System;
using Microsoft.AspNetCore.Mvc;

namespace RussoTrip.Components
{
	public class HomePageNavigation : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}

