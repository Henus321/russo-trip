using System;
using Microsoft.AspNetCore.Mvc;

namespace RussoTrip.Components
{
	public class AppHeader : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}

