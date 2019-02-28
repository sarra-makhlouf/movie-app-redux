import { ADD_MOVIE } from "../constants/actionsTypes";
import FightClub from "../pictures/fight club.jpg";
import Snatch from "../pictures/snatch.jpg";
import Vendetta from "../pictures/v for vendetta.jpg";
import WallE from "../pictures/wall-e.jpg";

const initialState = [
  {
    picture: `${FightClub}`,
    title: "Fight Club",
    date: "1999",
    rating: 5
  },
  {
    picture: `${Snatch}`,
    title: "Snatch",
    date: "2000",
    rating: 4
  },
  {
    picture: `${Vendetta}`,
    title: "V for Vendetta",
    date: "2005",
    rating: 5
  },
  {
    picture: `${WallE}`,
    title: "WALL-E",
    date: "2008",
    rating: 4
  }
];

function movieListReducer(state = initialState, action) {
  if (action.type === ADD_MOVIE) {
    return state.concat(action.movie);
  }
  return state;
}

export default movieListReducer;
