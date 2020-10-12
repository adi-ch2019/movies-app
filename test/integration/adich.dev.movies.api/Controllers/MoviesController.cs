using Microsoft.AspNetCore.Mvc;
using adich.dev.movies.api.Data;

namespace adich.dev.movies.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private IMovieService _service;

        public MoviesController(IMovieService service)
        {
            _service = service;
        }

        //Create/Add a new movie
        [HttpPost("AddMovie")]
        public IActionResult AddMovie([FromBody] Movie movie)
        {
            try
            {
                if (movie.Language != null && movie.Title != null && movie.Location != null)
                {
                    _service.AddMovie(movie);
                    return Ok(movie);
                }
                return BadRequest("Movie was not added");
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        //Read all books
        [HttpGet("[action]")]
        public IActionResult GetMovies()
        {
            var allMovies = _service.GetAllMovies();
            return Ok(allMovies);
        }

        [HttpPut("UpdateMovie/{id}")]
        public IActionResult UpdateMovie(string id, [FromBody] Movie movie)
        {
            _service.UpdateMovie(id, movie);
            return Ok(movie);
        }

        //Delete a movie
        [HttpDelete("DeleteMovie/{id}")]
        public IActionResult DeleteMovie(string id)
        {
            _service.DeleteMovie(id);
            return Ok();
        }

        //Get a single movie by id
        [HttpGet("SingleMovie/{id}")]
        public IActionResult GetMovieById(string id)
        {
            var movie = _service.GetMovieById(id);
            return Ok(movie);
        }

    }
}
