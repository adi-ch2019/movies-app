using System;
using System.Collections.Generic;

namespace adich.dev.movies.api.Data
{
    public class Movie
    {
         public string Language { get; set; }
        public string Location { get; set; }
        public string Plot { get; set; }
        public string Poster { get; set; }
        public IList<string> SoundEffects { get; set; }
        public IList<string> Stills { get; set; }
        public string Title { get; set; }
        public string imdbID { get; set; }
        public string listingType { get; set; }
        public string imdbRating { get; set; }

    }
}