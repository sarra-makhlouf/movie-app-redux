
import { EDIT_MOVIE } from "../constants/actionsTypes";
const editReducer = (state = {}, action) => {
    if (action.type === EDIT_MOVIE) {
        return action.movie;
    }
    return state
}

export default editReducer
    // console.log(state.findIndex(el => el === action.title));
    // return state.filter(el => el.title === action.title);