using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RussoTrip.Interfaces;
using RussoTrip.Models;

namespace RussoTrip.Pages.Excursions;
public class DetailsModel : PageModel
{
    private readonly ApplicationDbContext _db;
    private UserManager<ApplicationUser> _userManager;
    private readonly IExcursionRepository _excursionRepository;
    private readonly ICommentRepository _commentRepository;
    public Excursion Excursion { get; set; }
    public IEnumerable<Comment> Comments { get; set; }
    
    [FromQuery(Name = "id")]
    public int Id { get; set; }

    public DetailsModel(ApplicationDbContext db, UserManager<ApplicationUser> userManager, IExcursionRepository excursionRepository, ICommentRepository commentRepository)
    {
        _db = db;
        _userManager = userManager;
        _excursionRepository = excursionRepository;
        _commentRepository = commentRepository;
    }

    public void OnGetAsync()
    {
        Excursion = _excursionRepository.GetExcursionById(Id);
        Comments = _commentRepository.GetComments(Id);
    } 
    
    public async Task OnPostAsync(string comment)
    {
        Excursion = _excursionRepository.GetExcursionById(Id);
        Comments = _commentRepository.GetComments(Id);
        var user = await _userManager.GetUserAsync(User);

        var newComment = new Comment()
        {
            Body = comment,
            Date = DateTime.Now,
            User = user,
            Excursion = Excursion,
        };
        _db.Comments.Add(newComment);
        await _db.SaveChangesAsync();
    }
}

