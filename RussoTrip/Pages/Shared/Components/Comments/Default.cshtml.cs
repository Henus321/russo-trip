using Microsoft.AspNetCore.Mvc;
using RussoTrip.Models;

namespace RussoTrip.Components
{
    public class Comments : ViewComponent
    {
        public IViewComponentResult Invoke(IEnumerable<Comment> comments)
        {
            return View(comments);
        }
    }
}