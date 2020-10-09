# Generic Instructions: 

oUse any frontend or backend technology of your choice 

oShould be accompanied by unit tests & preferably written using TDD approach 

oShould commit code to a public git repository (GitHub) under a public handle 

oUse generic package names 

oCommits should be incremental so that one can look at the commit log and make sense of how the code has progressed along with the test cases. (recommended at least up to20 commits to show how the code progresses; larger number of commits isn’t a problem) 

oExplain clearly on how to run both the backend and the frontend in the submission 

oDon’t spend more than 3hours -4hours.  

# Purpose: 

The purpose of this assignment is to assess the ability of developer to 

•Develop frontend using a popular modern responsive UI framework (React, Vue, Angular, etc...) 

•Develop backend with any technology of your choice 

•Write test for both UI and backend code 

•Follow clean code practices 

•UX consideration 

# TASK: 

❖Create a web application to list movies available for a user. 

❖User should be able to search through the movies using the titleand sort the result. 

❖When a selection is made it should go to the details page and present all the information available for that movie (Plot, Ratings, Poster, Stills etc). The user should be able to go back to the main page as well.
 
❖There should also be a dedicated filter for the movies by Language or Location (drop down). 

## Bonus:  

oBook a movie through the application 

oImplement Login  

Use the json file “movies.json” provided along with this instruction as a base model for your UI and API. You can add fields or append data on top as per your needs as long as the basic points listed in the TASK is covered. 

## FRONTEND: 

You can use any front end libraries you are comfortable with. Follow standard folder and resource structures so that it is easy and simple to follow through the code. 

Have a README.md file on how to build and run the UI application. 

 

## BACKEND: 

Initially you can use one of the popular fake server to quickly ramp up the UI however you should create your own API with the technology of your choice before the final submission. 

https://github.com/typicode/json-server(for a full fake REST API) 

>npminstall-gjson-server> json-server --watch movies.json 
 
https://github.com/marmelab/json-graphql-server(for a full fake GRAPHQL API) 

> npm install -g json-graphql-server> json-graphql-server movies.js 