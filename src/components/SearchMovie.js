import React from 'react';
import axios from 'axios';


const apiKey = '3463c35b79f204a177932e675579e8f9';
class SearchMovie extends React.Component {

	constructor (props){
		super(props)
		this.state ={
			query: '',
		}
	}

	handleChange2 = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value });
	}
	handleChange = (e) => {
		let props = this.props;
		e.preventDefault();
		let data = {
			api_key: apiKey,
			language: 'en-US',
			query: this.state.query,
			page: 1,
			include_adult:false
		};
		axios.get(`https://api.themoviedb.org/3/search/movie`, {params: data})
		  .then(function (response) {
		    let firstMovie = response.data.results[0].id;
		    let data = {
				api_key: apiKey,
				language: 'en-US'
			};
			axios.get(`https://api.themoviedb.org/3/movie/${firstMovie}`, {params: data})
		  		.then((response) => {
					props.changeMovies(response.data)
		  			console.log(response)
		  		})
		  })
		  .catch(function (error) {
		    // handle error
		    console.log(error);
		  })
		  .finally(function () {
		    // always executed
		  });
	}

	render(){
		return <form className="form" onSubmit={this.handleChange}>
			<input value={this.state.query} name='query' placeholder='Search...' onChange={this.handleChange2} />
			<input type='submit' value="Buscar" />
		</form>	
	} 
}

export default SearchMovie