using System;
using Microsoft.AspNetCore.Mvc;

namespace RussoTrip.Components
{
	public class SearchInput : ViewComponent
	{
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}

