import { books } from "./books_data.js";

const getTotalValueOfBooks = (books) => {
  const totalPrice = books.reduce((previous, book) => book.price + previous, 0);
  return totalPrice;
};
export default getTotalValueOfBooks;
