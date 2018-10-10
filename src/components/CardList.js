import React, {Component} from 'react';

import Card from "./Card";

class CardList extends Component{
	render(){
		console.log(this.props);
		const cardsArray = this.props.robots.map((robot, i) => {
			return(<Card key={this.props.robots[i].id}
				id={this.props.robots[i].id} 
				name={this.props.robots[i].name} 
				email={this.props.robots[i].email}/>);
		})
		return (
			<div>
				{cardsArray}
			</div>
		);

	}
}

export default CardList;