using System;
using Microsoft.AspNetCore.Mvc;
using RussoTrip.Models;

namespace RussoTrip.Components
{
	public class PageTitle : ViewComponent
    {
        public IViewComponentResult Invoke(string title, string subtitle)
        {
            var titles = new Dictionary<string, string>
            {
                { "Title", title },
                { "Subtitle", subtitle }
            };
            return View(titles);
        }
    }
}

