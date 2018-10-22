import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import 'tachyons';
import './App.css';

//Connecting App.js with Redux
import {setSearchField, requestRobots} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		errorState: state.requestRobots.errorState
	}
}

const mapDispatchToProps = dispatch => {
	//dispatch is what triggers an action
	//To dispatch the action in the reducer
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}

}


class App extends Component{
	

	componentDidMount(){
		console.log('Reactr Store', this.props.store)
		this.props.onRequestRobots();
	}

	


	render(){
		const filteredRobots = this.props.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
		})
		//To provide for long load times
		if(this.props.isPending){
			return (
				<h1> Loading </h1>
				);
		}else{

			return (
				<div className="pa3 tc">
					
					<h1 className="f1"> Robofriends </h1>
					<SearchBox searchChange={this.props.onSearchChange}/>	
					<CardList robots={filteredRobots}/>
				</div>
				);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);