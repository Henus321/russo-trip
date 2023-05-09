using System;
using Microsoft.AspNetCore.Mvc;

namespace RussoTrip.Components
{
	public class AppFooter : ViewComponent
	{
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}

