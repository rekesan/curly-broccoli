export const applyDiscountPriceOfBooks = (books, value) => {
    books.map(book => { 
    book.price = book.price - (Math.round(book.price * value/100).toFixed(2)); 
    return book;
  });
    return books;
};