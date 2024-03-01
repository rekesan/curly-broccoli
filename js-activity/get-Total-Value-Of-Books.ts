import { Book } from "./books_data";

const getTotalValueOfBooks = (books: Book[]): number => {
  const totalPrice = books.reduce((priceAcc, book) => book.price + priceAcc, 0);
  return totalPrice;
};
export default getTotalValueOfBooks;
