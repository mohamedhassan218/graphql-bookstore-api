let books = [
    { id: '1', title: 'The Great Gatsby', genres: ['Classic', 'Fiction'] },
    { id: '2', title: 'To Kill a Mockingbird', genres: ['Classic', 'Drama'] },
    { id: '3', title: '1984', genres: ['Dystopian', 'Science Fiction'] },
    { id: '4', title: 'Moby Dick', genres: ['Adventure', 'Classic'] },
    { id: '5', title: 'Pride and Prejudice', genres: ['Romance', 'Classic'] }
];

let users = [
    { id: '1', name: 'alice', premiumMember: true },
    { id: '2', name: 'bob', premiumMember: false },
    { id: '3', name: 'charlie', premiumMember: true }
];

let reviews = [
    { id: '1', rating: 9, content: 'An amazing read with timeless themes.', user_id: '1', book_id: '2' },
    { id: '2', rating: 10, content: 'Loved every page!', user_id: '2', book_id: '1' },
    { id: '3', rating: 8, content: 'A bit dense but rewarding.', user_id: '3', book_id: '3' },
    { id: '4', rating: 5, content: 'Too slow for my taste.', user_id: '2', book_id: '4' },
    { id: '5', rating: 9, content: 'An insightful and heartwarming story.', user_id: '1', book_id: '5' },
    { id: '6', rating: 7, content: 'Important themes but a tough read.', user_id: '3', book_id: '2' },
    { id: '7', rating: 10, content: 'A masterpiece of literature.', user_id: '2', book_id: '1' }
];

export default { books, users, reviews };
