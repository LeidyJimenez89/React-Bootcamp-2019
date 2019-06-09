import React from "react";

//import moviesData from '../data/movies.json'
import { Redirect } from "react-router-dom";

import MovieCard from "../components/MovieCard";
import SearchMovie from "../components/SearchMovie";

import MainLayout from "../layouts/MainLayout";

import withAuth from "../views/withAuth";

const WelcomText = ({ isAuth }) => (
  <div> {isAuth ? "Bienvenido a Casa" : "Go away"} </div>
);

class Home extends React.Component {
  //state = {
  //    ...moviesData,
  //}

  state = {
    results: []
  };

  //Pasar los datos del hijo al padre
  addMovie = movie => {
    //console.log(movie)
    const movies = this.state.results;
    movies.unshift(movie);
    this.setState({ movies });
  };

  /*deleteMovie = (movieId) => {
    this.setState((state, props) => {
      const movies = state.movies.filter((movie) => movie.id !== movieId)
      return  {
        movies
      }
    })
  }*/

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=3463c35b79f204a177932e675579e8f9&language=en-US&page=1"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data.results
        });
      });

    this.props.requestUsers();
  }

  render() {
    const { isAuth } = this.props;
    return (
      <MainLayout>
        <WelcomText isAuth={isAuth} />
        {/*<Redirect to='/add' />*/}
        {this.state.results.map(movie => (
          <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />
        ))}
      </MainLayout>
    );
  }
}

export default withAuth(Home);
