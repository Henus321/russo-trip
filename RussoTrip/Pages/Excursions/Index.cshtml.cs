using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RussoTrip.Interfaces;
using RussoTrip.Models;

namespace RussoTrip.Pages.Excursions;
public class IndexModel : PageModel
{
    private readonly IExcursionRepository _excursionRepository;
    private readonly ICityRepository _cityRepository;
    public IEnumerable<Excursion> Excursions { get; set; }
    public IEnumerable<City> Cities { get; set; }
    [FromQuery(Name = "city")]
    public string City { get; set; }
    [FromQuery(Name = "page")]
    public int PageNum { get; set; } = 1;
    public int MaxPages { get; set; }

    public IndexModel(IExcursionRepository excursionRepository, ICityRepository cityRepository)
    {
        _excursionRepository = excursionRepository;
        _cityRepository = cityRepository;
    }

    public void OnGetAsync()
    {
        int pageSize = 4;
        int pageStart = pageSize * (PageNum - 1);

        if (string.IsNullOrEmpty(City))
        {
            var allExcursions = _excursionRepository.GetExcursions;
            MaxPages = (int)Math.Ceiling((decimal)allExcursions.Count() / (decimal)pageSize);
            Excursions = allExcursions.Skip(pageStart).Take(pageSize);
        }
        else
        {
            var allExcursions = _excursionRepository.GetExcursionsByCity(City);
            MaxPages = (int)Math.Ceiling((decimal)allExcursions.Count() / (decimal)pageSize);
            Excursions = allExcursions.Skip(pageStart).Take(pageSize);
        }
        Cities = _cityRepository.GetCities;
    }
}

