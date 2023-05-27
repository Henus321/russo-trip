using RussoTrip.Models;

namespace RussoTrip.Interfaces;
public interface ICommentRepository
{
    IEnumerable<Comment> GetComments(int excursionId);
}