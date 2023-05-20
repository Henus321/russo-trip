using System;
using Microsoft.EntityFrameworkCore;
using RussoTrip.Areas.Identity.Data;
using RussoTrip.Interfaces;
using RussoTrip.Models;

namespace RussoTrip.Repository
{
    public class ExcursionRepository : IExcursionRepository
    {
        private readonly ApplicationDbContext _aplicationDbContext;

        public ExcursionRepository(ApplicationDbContext aplicationDbContext)
        {
            _aplicationDbContext = aplicationDbContext;
        }

        public IEnumerable<Excursion> GetExcursions
        {
            get
            {
               return _aplicationDbContext.Excursions.Include(c => c.City);
            }
        }


        public IEnumerable<Excursion>? GetExcursionsByCity(string city)
        {
            return _aplicationDbContext.Excursions.Where(e => e.City.Name == city).Include(c => c.City);
        }

        public IEnumerable<Excursion> GetLastSixExcursions
        {
            get
            {
                return _aplicationDbContext.Excursions.OrderByDescending(e => e.Date).Take(6).Include(c => c.City);
            }
        }

        public Excursion? GetExcursionById(int excursionId)
        {
            // replace include
            return _aplicationDbContext.Excursions.Include(c => c.City).FirstOrDefault(e => e.Id == excursionId);
        }
    }
}

