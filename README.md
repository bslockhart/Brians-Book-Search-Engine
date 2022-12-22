# Brians-Book-Search-Engine

## Description

Most modern websites are driven by two things: data and user demands. This shouldn't come as a surprise, as the ability to personalize user data is the cornerstone of real-world web development today. And as user demands evolve, applications need to be more performant. This application is a fully functioning Book Search
Engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end.

## Table of Contents

- [License](#license)
- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Screenshots](#screenshots)
- [Technical Acceptance Criteria](#technical-acceptance-criteria)
- [Deployment](#deployment)
- [Application Quality](#application-quality)
- [Repository Quality](#repository-quality)
- [Submission](#submission)

## License

This project is license under MIT ![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

## Installation

1. Clone the repository from GitHub
1. Install `node.js`
1. Run `npm install` to install dependencies.
1. Run `npm start` to start the web server and connect

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

## Screenshots

<img src="https://user-images.githubusercontent.com/109180146/209041639-f2aa1d80-7cf1-4b8b-a0e7-f914cd1dd036.png" width="1300"></img>

## Technical Acceptance Criteria

- Has an Apollo Server that uses GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.
- Use an Apollo Server and apply it to the Express.js server as middleware.
- Include schema settings for resolvers and typeDefs as outlined in the Challenge instructions.
- Modify the existing authentication middleware to work in the context of a GraphQL API.
- Use an Apollo Provider so that the application can communicate with the Apollo Server.
- Application must be deployed to Heroku.

## Deployment

- Application deployed at live URL.
- Application loads with no errors.
- Application’s GitHub URL is submitted.
- GitHub repo contains application code.

## Application Quality

- Application user experience is intuitive and easy to navigate.
- Application user interface style is clean and polished.
- Application resembles the mock-up functionality provided in the Challenge instructions.

## Repository Quality

- Repository has a unique name.
- Repository follows best practices for file structure and naming conventions.
- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- Repository contains multiple descriptive commit messages.
- Repository contains a quality README file with description, screenshot, and link to deployed application.

### Submission

- Date Submitted: December 21, 2022
- You are required to submit BOTH of the following for review:

1. The URL of the functional, deployed application: https://brians-book-search-engine.herokuapp.com/
2. The URL of the GitHub repository: https://github.com/bslockhart/Brians-Book-Search-Engine
