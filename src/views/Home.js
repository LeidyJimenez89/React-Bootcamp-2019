import React from 'react';

//import moviesData from '../data/movies.json'
import {Redirect} from 'react-router-dom'

import MovieCard from '../components/MovieCard'
import SearchMovie from '../components/SearchMovie'

import MainLayout from '../layouts/MainLayout'

class Home extends React.Component {

  //state = {
  //    ...moviesData,
  //}

  state = {
    results: []
  }

  //Pasar los datos del hijo al padre
  addMovie = (movie) =>{
    //console.log(movie)
    const movies = this.state.results
    movies.unshift(movie)
    this.setState({movies})
  }

  /*deleteMovie = (movieId) => {
    this.setState((state, props) => {
      const movies = state.movies.filter((movie) => movie.id !== movieId)
      return  {
        movies
      }
    })
  }*/

  componentDidMount () {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=3463c35b79f204a177932e675579e8f9&language=en-US&page=1')
    .then((res) => res.json())
    .then((data)=> {
      this.setState({
          results :  data.results
        })
    })
  }

  render() {
    return <MainLayout>
        {/*<Redirect to='/add' />*/}
        {this.state.results.map((movie) => <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />)}
    </MainLayout>
  }
}

export default Home