// get all titles of books that is below $10 dollars.
function getAffordableBooks(books) {
  return books.filter((book) => book.price < 10).map((book) => book.title);
}
export default getAffordableBooks;
