export const applyDiscountPriceOfBooks = (books, value) => {
    books.map(book => { 
    book.price = ((book.price) * (1 - (value/100))).toFixed(2); 
    return book;
  });
    return books;
};