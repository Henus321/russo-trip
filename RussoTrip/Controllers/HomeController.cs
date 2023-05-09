using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using RussoTrip.Interfaces;
using RussoTrip.Models;
using RussoTrip.ViewModels;

namespace RussoTrip.Controllers;

public class HomeController : Controller
{
    private readonly IExcursionRepository _excursionRepository;

    public HomeController(IExcursionRepository excursionRepository)
    {
        _excursionRepository = excursionRepository;
    }

    public IActionResult Index()
    {
        var excursions = _excursionRepository.GetLastSixExcursions;
        var homeViewModel = new HomeViewModel(excursions); 
        return View(homeViewModel);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

