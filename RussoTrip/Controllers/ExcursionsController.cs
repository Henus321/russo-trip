using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RussoTrip.Interfaces;
using RussoTrip.Models;
using RussoTrip.ViewModels;

namespace RussoTrip.Controllers
{
    public class ExcursionsController : Controller
    {
        private readonly IExcursionRepository _excursionRepository;
        private readonly ICityRepository _cityRepository;

        public ExcursionsController(IExcursionRepository excursionRepository, ICityRepository cityRepository)
        {
            _excursionRepository = excursionRepository;
            _cityRepository = cityRepository;
        }

        public IActionResult Index(string? city)
        {
            IEnumerable<Excursion>? excursions;
            if(string.IsNullOrEmpty(city))
            {
                excursions = _excursionRepository.GetExcursions;
            }
            else
            {
                excursions = _excursionRepository.GetExcursionsByCity(city);
            }
            var cities = _cityRepository.GetCities;
            var excursionsViewModel = new ExcursionsViewModel(excursions, cities);
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

