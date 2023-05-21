using System;
using Microsoft.EntityFrameworkCore;
using RussoTrip.Interfaces;
using RussoTrip.Models;

namespace RussoTrip.Repository
{
	public class CityRepository : ICityRepository
	{
        private readonly ApplicationDbContext _applicationDbContext;

        public CityRepository(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        public IEnumerable<City> GetCities
        {
            get
            {
                return _applicationDbContext.Cities.OrderBy(c => c.Name);
            }
        }
    }
}

