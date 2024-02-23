// get all titles of books that is below $10 dollars.
function getAffordableBooks(books){

    
   const affordable = books.map((book) =>{
        if(book.price < 10){
            return book.title
        }
    }).filter((book) => book!== undefined)
    
   return affordable;
}

export default getAffordableBooks;
