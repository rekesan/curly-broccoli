import { Book } from "./books_data";


export const getNumberOfBooksByGenre = (books: Book[]): { [genre: string]: number } => {
  let genreCount: { [genre: string]: number } = {};

  books.forEach(book => {
      genreCount[book.genre] = (genreCount[book.genre] || 0) + 1;
  });

  return genreCount;
}

