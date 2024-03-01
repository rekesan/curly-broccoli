export const applyDiscountPriceOfBooks = (books: BooksObject[], value: number):BooksObject[] => {
    return books.map(book =>  { 
    const discounted: number = parseFloat(((book.price) * (1 - (value/100))).toFixed(2)); 
    return {...book, price: discounted};
  });
};

type BooksObject = {
  title: string;
  author: string;
  year: number;
  genre: string;
  price: number;
}