using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RussoTrip.Interfaces;
using RussoTrip.ViewModels;

namespace RussoTrip.Controllers
{
    public class ExcursionsController : Controller
    {
        private readonly IExcursionRepository _excursionRepository;

        public ExcursionsController(IExcursionRepository excursionRepository)
        {
            _excursionRepository = excursionRepository;
        }

        public IActionResult Index()
        {
            var excursions = _excursionRepository.GetExcursions;
            var excursionsViewModel = new ExcursionsViewModel(excursions);
            return View(excursionsViewModel);
        }

        public IActionResult Details(int id)
        {
            var excursion = _excursionRepository.GetExcursionById(id);
            if (excursion == null)
                return NotFound();
            return View(excursion);
        }
    }
}

