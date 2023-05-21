using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RussoTrip.Interfaces;
using RussoTrip.Models;

namespace RussoTrip.Pages;
public class IndexModel : PageModel
{
    private readonly IExcursionRepository _excursionRepository;
    public IEnumerable<Excursion> Excursions { get; set; }

    public IndexModel(IExcursionRepository excursionRepository)
    {
        _excursionRepository = excursionRepository;
    }

    public void OnGetAsync()
    {
        Excursions = _excursionRepository.GetLastSixExcursions;
    }
}

