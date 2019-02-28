import {ADD_MOVIE, SEARCH_MOVIE, SEARCH_RATING} from '../constants/actionsTypes';
export function addMovie(movie) {
  return { type: ADD_MOVIE, movie };
}
export function searchMovie(search) {
  return { type: SEARCH_MOVIE, search}
}
export function searchRating(rating) {
  return { type: SEARCH_RATING, rating}
}
