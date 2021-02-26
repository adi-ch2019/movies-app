using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;

namespace adich.dev.movies.api.Data
{
    public static class Data
    {
         public static List<Movie> Movies => allMovie;
        static List<Movie> allMovie = GetMoviesFromJson();
         static List<Movie> GetMoviesFromJson()
        {
            var jsonString = File.ReadAllText(@".\Data\movies.json");
            return JsonConvert.DeserializeObject<List<Movie>>(jsonString);
        }
    }
}