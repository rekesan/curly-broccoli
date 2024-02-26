
  export const getNumberOfBooksByGenre = (books) => {
    let genreCount = {};
    
    books.forEach(book => {
      genreCount[book.genre] = (genreCount[book.genre] || 0);
    });
    
    return genreCount;
  }
  


