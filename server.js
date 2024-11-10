import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import db from './_db.js'
import { typeDefs } from './schema.js'

// resolvers
const resolvers = {
    Query: {
        books()
        {
            return db.books;
        },
        users()
        {
            return db.users;
        },
        reviews()
        {
            return db.reviews;
        },
        book(parent, args, context)
        {
            return db.books.find((book) => book.id === args.id);
        },
        user(parent, args, context)
        {
            return db.users.find((user) => user.id === args.id);
        },
        review(parent, args, context)
        {
            return db.reviews.find((review) => review.id === args.id);
        }
    },
    Book: {
        reviews(parent, args, context)
        {
            return db.reviews.filter((r) => r.book_id === parent.id);
        }
    },
    Review: {
        user(parent, args, context)
        {
            return db.users.find((a) => a.id === parent.user_id);
        },
        book(parent, args, context)
        {
            return db.books.find((b) => b.id === parent.book_id);
        }
    },
    User: {
        reviews(parent)
        {
            return db.reviews.filter((r) => r.user_id === parent.id);
        }
    },
    Mutation: {
        deleteReview(parent, args, context)
        {
            db.reviews = db.reviews.filter((r) => r.id !== args.id);
            return db.reviews;
        },
        deleteUser(parent, args, context)
        {
            db.users = db.users.filter((u) => u.id !== args.id);
            return db.users;
        },
        deleteBook(parent, args, context)
        {
            db.books = db.books.filter((b) => b.id !== args.id);
            return db.books;
        },
        addBook(parent, args, context)
        {
            let book = {
                ...args.book,
                id: Math.floor(Math.random() * 10000).toString()
            };
            db.books.push(book);
            return book;
        },
        addUser(parent, args, context)
        {
            let user = {
                ...args.user,
                id: Math.floor(Math.random() * 10000).toString(),
                reviews: [],
                premiumMember: false,
                books: []
            };
            db.users.push(user);
            return user;
        },

        // Has problems.
        addReview(parent, args, context)
        {
            const { user_id, book_id, rating, content } = args.review;

            // Find the user and book by ID
            const user = db.users.find((user) => user.id === user_id);
            const book = db.books.find((book) => book.id === book_id);

            // Ensure both user and book exist
            if (!user)
            {
                throw new Error(`User with ID ${user_id} not found`);
            }
            if (!book)
            {
                throw new Error(`Book with ID ${book_id} not found`);
            }

            // Create the review object
            let review = {
                id: Math.floor(Math.random() * 10000).toString(),
                rating,
                content,
                user: user,  // Set the user object here
                book: book       // Set the book object here
            };

            // Push the review to the database
            db.reviews.push(review);

            // Update user and book to include this review
            user.reviews = user.reviews || [];
            user.reviews.push(review);

            book.reviews = book.reviews || [];
            book.reviews.push(review);

            return review;
        },

        updateBook(parent, args, context)
        {
            db.books = db.books.map((book) =>
            {
                if (book.id === args.id)
                {
                    return { ...book, ...args.book };
                }
                return book;
            });
            return db.books.find((book) => book.id === args.id);
        },

    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 5000 }
});

console.log(`Server ready at: ${url}`);