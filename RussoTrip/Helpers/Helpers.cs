using System;
namespace RussoTrip.Helpers
{
	public static class Helpers
	{
        public static string GetLocaleCity(string city)
        {
            switch (city.ToLower())
            {
                case "moscow":
                    return "Москва";
                case "saint-petersburg":
                    return "Санкт-Петербург";
                case "kazan":
                    return "Казань";
                case "vladivostok":
                    return "Владивосток";
                default:
                    return "";
            }
        }
    }
}

