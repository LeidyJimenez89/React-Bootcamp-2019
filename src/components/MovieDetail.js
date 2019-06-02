import React from 'react';
import axios from 'axios';

const apiKey = '3463c35b79f204a177932e675579e8f9';

class MovieDetail extends React.Component {

	state = {
		info: {},
	}

	componentDidMount () {
		//console.log(this.props)

		let movieID = this.props.movieId.id
		let data = {
			api_key: apiKey,
			language: 'en-US'
		};
		axios.get(`https://api.themoviedb.org/3/movie/${movieID}`, {params:data})
	  		.then((response) => {
		      this.setState({
		          info :  response.data
		        })
	  		})
	}

	render(){
		return <div>  
	      <h1>{this.state.info.original_title}</h1>
	      <div>{this.state.info.original_language}</div>
	      <div>{this.state.info.overview}</div>
    	</div>
	} 
} 

export default MovieDetail

