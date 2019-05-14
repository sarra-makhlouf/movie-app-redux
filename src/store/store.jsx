import { createStore, combineReducers } from 'redux';
import movieListReducer from '../reducers/movieListReducer';
import searchReducer from '../reducers/searchReducer';
import ratingReducer from '../reducers/ratingReducer';
import editReducer from '../reducers/editReducer';

const store = createStore(combineReducers({
    movieListReducer,
    searchReducer,
    ratingReducer,
    editReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;