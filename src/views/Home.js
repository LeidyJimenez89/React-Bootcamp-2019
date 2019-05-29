import React from 'react';

//import moviesData from '../data/movies.json'

import MovieCard from '../components/MovieCard'
import MovieForm from '../components/MovieForm'
import SearchMovie from '../components/SearchMovie'

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

  componentDidMount () {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=3463c35b79f204a177932e675579e8f9&language=en-US&page=1')
    .then((res) => res.json())
    .then((data)=> {
      this.setState({
          results :  data.results
        })
    })
  }

  /*deleteMovie = (movieId) => {
    this.setState((state, props) => {
      const movies = state.movies.filter((movie) => movie.id !== movieId)
      return  {
        movies
      }
    })
  }*/

  render() {
    return <div>

      <h1 className='main-title'>Movie App</h1>

      {/* Componente SearchMovie */}
      <SearchMovie changeMovies = {this.addMovie}/>
      
      {/* Componente MovieForm */}
      <MovieForm onSubmit = {this.addMovie}/>
      
      {/* Componente MovieCard */}
      <div className='content'>
        {this.state.results.map((movie) => <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />)}
        {/*{this.state.movies.map((movie) => <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />)}*/}
      </div>
    
    </div>
  }
}

export default Home