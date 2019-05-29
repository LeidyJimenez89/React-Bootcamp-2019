import React from 'react';

class MovieForm extends React.Component {

	constructor (props){
		super(props)
		this.state ={
			id: '',
			title: '',
			year: '',
			image: '',
			genre: '',
			overview: '',
		}
		this.yearRef = React.createRef()
	}

	componentDidMount (){
		//Se lo puedo pasar al hijo
		console.log(this.yearRef.current.focus())
		//console.log(this.yearRef.current.value)
	}

	handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		//Evita recargar y el action del form
		e.preventDefault();
		
		// Se haría la creación

		// Para este ejercicico se va a mandar la info del hijo al padre
		this.props.onSubmit(this.state)
		//this.props.onAddMovie(this.state)
	}

	render(){
		return <form className="form" onSubmit ={this.handleSubmit}>
			<input id='movieID' value={this.state.id} name='id' placeholder='id' onChange={this.handleChange}/>
			<input value={this.state.title} name='title' placeholder='title' onChange={this.handleChange}/>
			<input ref={this.yearRef} value={this.state.year} name='year' placeholder='year' onChange={this.handleChange}/>
			<input value={this.state.image} name='image' placeholder='image' onChange={this.handleChange}/>
			<input value={this.state.genre} name='genre' placeholder='genre' onChange={this.handleChange}/>
			<input value={this.state.overview} name='overview' placeholder='overview' onChange={this.handleChange}/>
			<input type='submit' value="Save" />
		</form>	
	} 
}

export default MovieForm