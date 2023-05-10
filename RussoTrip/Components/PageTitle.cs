using System;
using Microsoft.AspNetCore.Mvc;
using RussoTrip.Models;

namespace RussoTrip.Components
{
	public class PageTitle : ViewComponent
    {
        public IViewComponentResult Invoke(string title)
        {
            return View<string>(title);
        }
    }
}

