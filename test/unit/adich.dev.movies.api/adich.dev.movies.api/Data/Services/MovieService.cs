using System.Collections.Generic;
using System.Linq;

namespace adich.dev.movies.api.Data
{
    public class MovieService : IMovieService
    {
        public void AddMovie(Movie newMovie)
        {
            Data.Movies.Add(newMovie);
           // throw new System.NotImplementedException();
        }

        public void DeleteMovie(string id)
        {
            var Movie = Data.Movies.FirstOrDefault(n => n.imdbID == id);
            Data.Movies.Remove(Movie);
            //throw new System.NotImplementedException();
        }

        public List<Movie> GetAllMovies()
        {
            return Data.Movies.ToList();
            //throw new System.NotImplementedException();
        }

        public Movie GetMovieById(string id)
        {
            return Data.Movies.FirstOrDefault(n => n.imdbID == id);
           // throw new System.NotImplementedException();
        }

        public void UpdateMovie(string id, Movie newMovie)
        {
             var oldMovie = Data.Movies.FirstOrDefault(n => n.imdbID == id);
            if(oldMovie != null)
            {
                oldMovie.Language = newMovie.Language;
                oldMovie.Location = newMovie.Location;

            }       
            //throw new System.NotImplementedException();
        }
    }
}