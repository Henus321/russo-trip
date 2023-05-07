using System;
using Microsoft.EntityFrameworkCore;
using RussoTrip.Interfaces;
using RussoTrip.Models;

namespace RussoTrip.Repository
{
	public class CityRepository : ICityRepository
	{
        private readonly RussoTripDbContext _russoTripDbContext;

        public CityRepository(RussoTripDbContext russoTripDbContext)
        {
            _russoTripDbContext = russoTripDbContext;
        }

        public IEnumerable<City> GetCities
        {
            get
            {
                return _russoTripDbContext.Cities.OrderBy(c => c.Name);
            }
        }
    }
}

