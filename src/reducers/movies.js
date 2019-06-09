import { REQUEST_MOVIES } from "../actions/actionTypes";
import movies from "../data/movies";
import initialState from "./initialState";

export default (state = initialState.movies, action) => {
	switch (action.type) {
		case REQUEST_MOVIES:
			return {
				...state,
				data: movies.movies
			};
		default:
			return state;
	}
};
