using System;
using Microsoft.AspNetCore.Mvc;

namespace RussoTrip.Components
{
	public class NavigationToHome : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}

