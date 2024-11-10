export const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    genres: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    user: User!
    book: Book!
  }
  type User {
    id: ID!
    name: String!
    premiumMember: Boolean!
    reviews: [Review!]
  }
  
  type Query {
    books: [Book]
    reviews: [Review]
    users: [User]

    book(id: ID!): Book
    review(id: ID!): Review
    user(id: ID!): User
  
  }
  type Mutation {
    deleteBook(id: ID!): [Book]
    deleteReview(id: ID!): [Review]
    deleteUser(id: ID!): [User]

    addBook(book: AddBookInput!): Book
    addReview(review: AddReviewInput!): Review
    addUser(user: AddUserInput!): User

    updateBook(id: ID!, book: UpdateBookInput!): Book


  }

  input AddBookInput {
    title: String!
    genres: [String!]!
  }
  input AddReviewInput {
    rating: Int!
    content: String!
    user_id: ID!
    book_id: ID!
  }
  input AddUserInput {
    name: String!
  }
  input UpdateBookInput {
    title: String
    genres: [String!]!
  }

`
