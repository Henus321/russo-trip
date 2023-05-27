using RussoTrip.Interfaces;
using RussoTrip.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace RussoTrip.Repository
{
    public class CommentRepository : ICommentRepository
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public CommentRepository(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        public IEnumerable<Comment> GetComments(int excursionId)
        {
            return _applicationDbContext.Comments.Where(c => c.Excursion.Id == excursionId).Include(c=> c.User).OrderByDescending(c => c.Date);
        }
    }
}