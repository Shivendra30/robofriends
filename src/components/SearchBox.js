import React, {Component} from 'react';

class SearchBox extends Component{
	render(){
		return(
			<div>
				<input 
				onChange={this.props.searchChange}
				className="pa2 ma3 b--green ba bg-lightest-blue"
				type="search" 
				placeholder="Search Robots" />
			</div>
			);
	}
}

export default SearchBox;