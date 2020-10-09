using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using adich.dev.movies.api.Controllers;
using adich.dev.movies.api.Data;

namespace adich.dev.movies.api.test.Controllers
{
    [TestClass]
    public class MoviesControllerTests
    {
        private MockRepository mockRepository;

        private Mock<IMovieService> mockMovieService;

        [TestInitialize]
        public void TestInitialize()
        {
            this.mockRepository = new MockRepository(MockBehavior.Strict);

            this.mockMovieService = this.mockRepository.Create<IMovieService>();
        }

        private MoviesController CreateMoviesController()
        {
            return new MoviesController(
                this.mockMovieService.Object);
        }

        [TestMethod]
        public void AddMovie_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var moviesController = this.CreateMoviesController();
            Movie book = null;

            // Act
            var result = moviesController.AddMovie(
                book);

            // Assert
            Assert.Fail();
            this.mockRepository.VerifyAll();
        }

        [TestMethod]
        public void GetMovies_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var moviesController = this.CreateMoviesController();

            // Act
            var result = moviesController.GetMovies();

            // Assert
            Assert.Fail();
            this.mockRepository.VerifyAll();
        }

        [TestMethod]
        public void UpdateMovie_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var moviesController = this.CreateMoviesController();
            string id = null;
            Movie book = null;

            // Act
            var result = moviesController.UpdateMovie(
                id,
                book);

            // Assert
            Assert.Fail();
            this.mockRepository.VerifyAll();
        }

        [TestMethod]
        public void DeleteMovie_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var moviesController = this.CreateMoviesController();
            string id = null;

            // Act
            var result = moviesController.DeleteMovie(
                id);

            // Assert
            Assert.Fail();
            this.mockRepository.VerifyAll();
        }

        [TestMethod]
        public void GetMovieById_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var moviesController = this.CreateMoviesController();
            string id = null;

            // Act
            var result = moviesController.GetMovieById(
                id);

            // Assert
            Assert.Fail();
            this.mockRepository.VerifyAll();
        }
    }
}
