using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using adich.dev.movies.api.Data;

namespace adich.dev.movies.api.test.Data.Services
{
    [TestClass]
    public class MovieServiceTests
    {
        private MockRepository mockRepository;



        [TestInitialize]
        public void TestInitialize()
        {
            this.mockRepository = new MockRepository(MockBehavior.Strict);


        }

        private MovieService CreateService()
        {
            return new MovieService();
        }

        [TestMethod]
        public void AddMovie_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var service = this.CreateService();
            Movie newMovie = null;

            // Act
            service.AddMovie(
                newMovie);

            // Assert
            Assert.Fail();
            this.mockRepository.VerifyAll();
        }

        [TestMethod]
        public void DeleteMovie_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var service = this.CreateService();
            string id = null;

            // Act
            service.DeleteMovie(
                id);

            // Assert
            Assert.Fail();
            this.mockRepository.VerifyAll();
        }

        [TestMethod]
        public void GetAllMovies_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var service = this.CreateService();

            // Act
            var result = service.GetAllMovies();

            // Assert
            Assert.Fail();
            this.mockRepository.VerifyAll();
        }

        [TestMethod]
        public void GetMovieById_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var service = this.CreateService();
            string id = null;

            // Act
            var result = service.GetMovieById(
                id);

            // Assert
            Assert.Fail();
            this.mockRepository.VerifyAll();
        }

        [TestMethod]
        public void UpdateMovie_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var service = this.CreateService();
            string id = null;
            Movie newMovie = null;

            // Act
            service.UpdateMovie(
                id,
                newMovie);

            // Assert
            Assert.Fail();
            this.mockRepository.VerifyAll();
        }
    }
}
