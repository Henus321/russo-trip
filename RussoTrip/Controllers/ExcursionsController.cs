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

        public IActionResult Index(string? city, int page = 1)
        {
            IEnumerable<Excursion>? excursions;
            int pageSize = 4;
            int pageStart = pageSize * (page - 1);
            int maxPages;
    
            if (string.IsNullOrEmpty(city))
            {
                var allExcursions = _excursionRepository.GetExcursions;
                maxPages = (int)Math.Ceiling((decimal)allExcursions.Count() / (decimal)pageSize);
                excursions = allExcursions.Skip(pageStart).Take(pageSize);
            }
            else
            {
                var allExcursions = _excursionRepository.GetExcursionsByCity(city);
                maxPages = (int)Math.Ceiling((decimal)allExcursions.Count() / (decimal)pageSize);
                excursions = allExcursions.Skip(pageStart).Take(pageSize);
            }
            var cities = _cityRepository.GetCities;
            var excursionsViewModel = new ExcursionsViewModel(excursions, cities, page, maxPages);
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

