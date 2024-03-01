export const applyDiscountPriceOfBooks = (books, value) => {
    return books.map(book => { 
    const discounted = parseFloat(((book.price) * (1 - (value/100))).toFixed(2)); 
    return {...book, price: discounted};
  });
};