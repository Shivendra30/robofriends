import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import 'tachyons';
import './App.css';

class App extends Component{
	
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		};
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {
			this.setState({robots: users});
		});
	}

	onSearchChange(e){
		//console.log(this.state.searchfield);
		this.setState({
			searchfield: e.target.value
		});
	}


	render(){
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		//To provide for long load times
		if(this.state.robots.length === 0){
			return (
				<h1> Loading </h1>
				);
		}else{

			return (
				<div className="pa3 tc">
					
					<h1 className="f1"> Robofriends </h1>
					<SearchBox searchChange={this.onSearchChange.bind(this)}/>	
					<CardList robots={filteredRobots}/>
				</div>
				);
		}
	}
}

export default App;