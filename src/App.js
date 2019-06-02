import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios';

import './App.css';

import Home from './views/Home'
import MovieForm from './components/MovieForm'
import MovieDetail from './components/MovieDetail'

function authUser(){
	return {isAuth: true}
}

function App (){
	const userAuth = authUser();
	return <Router>
		<Route exact path='/' component={Home} />
		<Route exact path='/add' component={MovieForm} />
		<Route exact path='/movie/:id' render={props => <MovieDetail movieId={props.match.params}/>} />
		{/*<Route exact path='/movie/:id' render={props => <MovieDetail {...props} />} />*/}
		<Route exact path='/addAuth' render={props => <MovieForm {...props} userAuth={userAuth} />}/>
	</Router>
}

export default App