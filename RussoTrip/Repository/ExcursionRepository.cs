using System;
using Microsoft.EntityFrameworkCore;
using RussoTrip.Interfaces;
using RussoTrip.Models;

namespace RussoTrip.Repository
{
    public class ExcursionRepository : IExcursionRepository
    {
        private readonly RussoTripDbContext _russoTripDbContext;

        public ExcursionRepository(RussoTripDbContext russoTripDbContext)
        {
            _russoTripDbContext = russoTripDbContext;
        }

        public IEnumerable<Excursion> GetExcursions
        {
            get
            {
               return _russoTripDbContext.Excursions.Include(c => c.City);
            }
        }


        public IEnumerable<Excursion>? GetExcursionsByCity(string city)
        {
            return _russoTripDbContext.Excursions.Where(e => e.City.Name == city).Include(c => c.City);
        }

        public IEnumerable<Excursion> GetLastSixExcursions
        {
            get
            {
                return _russoTripDbContext.Excursions.OrderByDescending(e => e.Date).Take(6).Include(c => c.City);
            }
        }

        public Excursion? GetExcursionById(int excursionId)
        {
            // replace include
            return _russoTripDbContext.Excursions.Include(c => c.City).FirstOrDefault(e => e.Id == excursionId);
        }
    }
}

