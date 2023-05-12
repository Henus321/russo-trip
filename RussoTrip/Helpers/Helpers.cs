using System;
using System.Text;

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

        public static string GetLocaleDate(string date)
        {
            var arr = date.Split(".");
            var month = arr[1] switch
            {
                "01" => " января ",
                "02" => " февраля ",
                "03" => " марта ",
                "04" => " апреля ",
                "05" => " мая ",
                "06" => " июня ",
                "07" => " июля ",
                "08" => " августа ",
                "09" => " сентября ",
                "10" => " октября ",
                "11" => " ноября ",
                "12" => " декабря ",
                _ => " ?? "
            };

            StringBuilder sb = new StringBuilder();
            sb.Append(arr[0]);
            sb.Append(month);
            sb.Append(arr[2]);
            return sb.ToString();
        }
    }
}

