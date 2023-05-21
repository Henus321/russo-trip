using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RussoTrip.Interfaces;
using RussoTrip.Models;

namespace RussoTrip.Pages.Excursions;
public class DetailsModel : PageModel
{
    private readonly IExcursionRepository _excursionRepository;
    public Excursion Excursion { get; set; }
    [FromQuery(Name = "id")]
    public int Id { get; set; }

    public DetailsModel(IExcursionRepository excursionRepository)
    {
        _excursionRepository = excursionRepository;
    }

    public void OnGetAsync()
    {
        Excursion = _excursionRepository.GetExcursionById(Id);
    }
}

