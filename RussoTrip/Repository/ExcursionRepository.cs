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
               return _russoTripDbContext.Excursions.Include(c => c.City); // Population?
            }
        }

        public Excursion? GetExcursionById(int excursionId)
        {
            return _russoTripDbContext.Excursions.FirstOrDefault(e => e.Id == excursionId);
        }
    }
}

