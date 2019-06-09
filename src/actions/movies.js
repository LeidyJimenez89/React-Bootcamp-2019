import { REQUEST_MOVIES } from "./actionTypes";

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=3463c35b79f204a177932e675579e8f9&language=en-US&page=1"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data.results
        });
      });

export const requestMovies = () => ({
	type: REQUEST_MOVIES
});

export const receiveMovies = () => ({
	type: RECEIVE_MOVIES,
	payloas: movies
});

export const catchMovies = error => ({
	type: ERROR_MOVIES,
	payloas: error
});

export fecthMovies = () => (dispatch) =>{
	dispatch(requestMovies())

}
