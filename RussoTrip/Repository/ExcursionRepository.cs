using System;
using Microsoft.EntityFrameworkCore;
using RussoTrip.Interfaces;
using RussoTrip.Models;

namespace RussoTrip.Repository
{
    public class ExcursionRepository : IExcursionRepository
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public ExcursionRepository(ApplicationDbContext aplicationDbContext)
        {
            _applicationDbContext = aplicationDbContext;
        }

        public IEnumerable<Excursion> GetExcursions
        {
            get
            {
               return _applicationDbContext.Excursions.Include(c => c.City).Include(c => c.Author);
            }
        }

        public IEnumerable<Excursion>? GetExcursionsByCity(string city)
        {
            return _applicationDbContext.Excursions.Where(e => e.City.Name == city).Include(c => c.City).Include(c => c.Author);
        }

        public IEnumerable<Excursion> GetLastSixExcursions
        {
            get
            {
                return _applicationDbContext.Excursions.OrderByDescending(e => e.Date).Take(6).Include(c => c.City).Include(c => c.Author);
            }
        }

        public Excursion? GetExcursionById(int excursionId)
        {
            return _applicationDbContext.Excursions.Include(c => c.City).Include(c => c.Author).FirstOrDefault(e => e.Id == excursionId);
        }
    }
}

