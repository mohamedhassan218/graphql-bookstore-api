# GraphQL Bookstore API

A GraphQL API for managing a virtual bookstore, enabling operations such as adding books, users, and reviews. This project showcases the use of Node.js, and GraphQL to create a flexible and efficient API for data management in a bookstore environment.


## Features

- **Add and Manage Books**: Add, view, and organize books by genres.
- **User Profiles**: Create user profiles with premium membership options.
- **Book Reviews**: Add reviews for books by registered users.
- **GraphQL Support**: Simplifies data fetching and enhances performance.
- **Built with Node.js and Express**: Ensures a lightweight and flexible backend.


## Technologies

- **Node.js**: Server-side JavaScript runtime.
- **GraphQL**: API query language and runtime for executing queries.


## API Documentation

### 1. Schema Overview
- **Book**: Represents a book in the bookstore.
- **User**: Represents a user with details such as premium membership status.
- **Review**: Stores reviews and ratings for books.

### 2. Queries
- **books**: Fetch all books.
- **book(id: ID!)**: Fetch a specific book by ID.
- **users**: Fetch all users.
- **user(id: ID!)**: Fetch a specific user by ID.
- **reviews**: Fetch all reviews.
- **review(id: ID!)**: Fetch a specific review by ID.

### 3. Mutations
- **addBook**: Add a new book to the bookstore.
- **addUser**: Register a new user.
- **addReview**: Add a new review to a specific book. [*This mutation doesn't work (has problems in the logic)*]
- **updateBook**: Update a specified book using it's **Id**.
- **deleteBook**: Delete the specified book.
- **deleteUser**: Delelte a specified user.
- **deleteReview**: Delete a specified review.

## Setup

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:mohamedhassan218/graphql-bookstore-api.git
   cd graphql-bookstore-api
   ```

2. Install Dependencies:
    ```bash
    npm install
    ```

3. Start the Server:
    ```bash
    npm run start
    ```

4. Access the GraphQL Playground: `http://localhost:5000/` to explore the GraphQL API.

5. Try the API using some queries and mutations like:
   
   ```graphql
   query {
        books {
            id
            title
            genres
        }
    }

    mutation {
        addBook(book:{genres: ["Tech", "CS"], title: "Designing Data-Intensive Applications"}) {
            id,
            title
        }
    }   
   ```