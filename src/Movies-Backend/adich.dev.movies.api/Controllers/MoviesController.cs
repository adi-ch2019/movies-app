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

        //Create/Add a new book
        [HttpPost("AddMovie")]
        public IActionResult AddMovie([FromBody] Movie book)
        {
            try
            {
                if (book.Language != null && book.Title != null && book.Location != null)
                {
                    _service.AddMovie(book);
                    return Ok(book);
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
        public IActionResult UpdateMovie(string id, [FromBody] Movie book)
        {
            _service.UpdateMovie(id, book);
            return Ok(book);
        }

        //Delete a book
        [HttpDelete("DeleteMovie/{id}")]
        public IActionResult DeleteMovie(string id)
        {
            _service.DeleteMovie(id);
            return Ok();
        }

        //Get a single book by id
        [HttpGet("SingleMovie/{id}")]
        public IActionResult GetMovieById(string id)
        {
            var book = _service.GetMovieById(id);
            return Ok(book);
        }

    }
}
