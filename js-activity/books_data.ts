export type Book = {
  title: string;
  author: string;
  year: number;
  genre: string;
  price: number;
};

export const books: Book[] = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
    price: 10.99,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy",
    price: 9.99,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian",
    price: 8.99,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    price: 7.99,
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    year: 1988,
    genre: "Non-fiction",
    price: 11.99,
  },
  {
    title: "The Great Gatsby",
    author: "FScott Fitzgerald",
    year: 1925,
    genre: "Fiction",
    price: 9.99,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance",
    price: 6.99,
  },
  {
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    year: 1947,
    genre: "Non-fiction",
    price: 10.99,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Fiction",
    price: 9.49,
  },
];
