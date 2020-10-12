using System.Collections.Generic;

namespace adich.dev.movies.api.Data
{
    public interface IMovieService
    {
        List<Movie> GetAllMovies();

        Movie GetMovieById(string id);

        void UpdateMovie(string id, Movie newMovie);

        void DeleteMovie(string id);

        
        void AddMovie(Movie newMovie);
    }
}