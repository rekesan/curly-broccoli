const getTotalValueOfBooks = (books) => {
  const totalPrice = books.reduce((priceAcc, book) => book.price + priceAcc, 0);
  return totalPrice;
};
export default getTotalValueOfBooks;
