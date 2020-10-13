# Angular 10 + .Net Core - Movies Application
[Visit my LinkedIn](https://www.linkedin.com/in/aditya2020/)
In my latest project I’ve used Angular 10 and .Net Core 3.1 so I wanted to create a working implementation to demonstrate the following technologies working together. 
Also includes
- Auth0 for Login
-OAS (Swagger Gen and UI)
-Docker files for CI
* [Angular 10](https://angular.io/)
* [ASP .NET Core Web API 3.1](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.1)
* [Unit tests](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/multi-container-microservice-net-applications/test-aspnet-core-services-web-apps)
* [Docker Desktop](https://docs.docker.com/develop/develop-images/multistage-build/) 
* [Angular Tests](https://angular.io/guide/testing-services)
		(https://angular.io/guide/testing-components-basics)
		(https://angular.io/guide/testing-code-coverage)

The project was created with the [Visual Studio Code]

### Why a .Net Core back-end? 

.Net Core is an excellent option to handle asynchronous request. It was designed for highly available and low latency server applications. The performance benchmarks are among the best comparing to other frameworks. You can see the ranking in the [Techempower Benchmarks](https://www.techempower.com/benchmarks/).
 


### What is the project case about?
Login to application to see the list of movies now showing along with Filter, search and location along with language segregation. 
The web application contains or lists the data via .NET Core api and Angular frontend. Information available in movies.json located in "src\Movies-Backend\adich.dev.movies.api\Data\movies.json"

### Project Organization
The project is organized in two parts, the first one is the server side that consists of a collection of .Net Core Web APIs that access .json file placed in the folder. The second part is an Angular 10 single page application that manages all the user interactions and calls the .Net Web APIs.

An ideal single page application contains only code that is responsible for user interactions and calls different external endpoints for fetching data and executing commands. The server-side code is located in a different project and deployed in a separate location. They could be web applications, docker containers, azure functions or API Gateways.

I decided to organize the server and client-side code in the same project to make it easy to run and to demo. This sample stills needs OAuth 2 authentication and additional logic to make it a production ready robust application

### Instructions
The code is available in my [github](https://github.com/adi-ch2019/adi-ch-dev/tree/master). It is required to clone it.
#### Backend
Visual Studio 2019
Open the Visual Studio 2019 and double click the .csproj file
Visual Studio Code
Open Folder to location "src\Movies-Backend\adich.dev.movies.api"
Open Terminal and do a "dotnet run"

## Application Walkthrough

The purpose of the application login via Auth0, View "Now Showing" Movies and further details for the plot, stills, imdbrating and so on. 
Screen by Sreen flow
Home Page
 

Login
 

Movies List
 
Movies Detail
 
## Azure CI/CD Results
Continuous integration and delivery deserves its own post. However, I wanted to show the basic steps to deploy an Angular single page application along with a .NET Core backend. The key is to use the VSTS Pipelines and include Node and npm install in the right order. The template will install the dependencies and also build the application using the production environment settings.  

![Azure CI/CD](https://andarito.blob.core.windows.net/github/gihub/AngularCRUD/CICD.JPG)

### Technical Architecture and Folder Structure
 

Initially 2-3 hours were spent on TDD on Both Angular and Backend
We have the latest commits and progress on develop Branch 





