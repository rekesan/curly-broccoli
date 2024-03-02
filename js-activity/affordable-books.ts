// get all titles of books that is below $10 dollars.
import { BooksArray } from "./books_data";

function getAffordableBooks(books : BooksArray[]):string[]{
  return books.filter((book) => book.price < 10).map((book) => book.title);
}
export default getAffordableBooks;
