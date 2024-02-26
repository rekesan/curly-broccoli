import { books } from "./books_data.js";
import { getMostLikedVideos } from "./get-most-liked-videos.js";
import { getMostViewedVideos } from "./get-most-viewed-videos.js";
import { youtubeVideos } from "./youtube_data.js";
import { applyDiscountPriceOfBooks } from "./discounted-books.js";
import getAffordableBooks from "./affordable-books.js";

// get all titles of most liked videos.
const mostLikedVideos = getMostLikedVideos(youtubeVideos);

// get all titles of most viewed videos.
const mostViewedVideos = getMostViewedVideos(youtubeVideos);

// get all titles of books that is below $10 dollars.
const affordableBooks = getAffordableBooks(books);

// returns an object of genre with their corresponding count as value
const numberOfBooksByGenre = getNumberOfBooksByGenre(books);

// returns the array of books reduced price by the discount
const discountedBooks = applyDiscountPriceOfBooks(books, 10);

// returns the summation of all price of the books
const totalInventoryValue = getTotalValueOfBooks(books);

// returns the solo representative of a genre
const soleBooksGenreRepresentative = getSoleRepresentative(books);