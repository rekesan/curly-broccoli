 
  let genreCount = {
  
  }
  export const getNumberOfBooksByGenre = books.forEach(book => {
    genreCount[book.genre] = (genreCount[book.genre] || 0) + 1;
  })
  
  console.log(genreCount);



