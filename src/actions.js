//We create an action using JS
import {CHANGE_SEARCH_FIELD, 
	REQUEST_ROBOTS_PENDING, 
	REQUEST_ROBOTS_SUCCESS, 
	REQUEST_ROBOTS_FAILED} from './constants.js';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestRobots = () => (dispatch) => {
	//dispatch the pending action
	dispatch({type:REQUEST_ROBOTS_PENDING }) //there's no payload here

	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(data => {
		dispatch({type:REQUEST_ROBOTS_SUCCESS, payload: data })
	})
	.catch(err => dispatch({type:REQUEST_ROBOTS_FAILED, payload: err }));

	//So we are basically dispatching different actions 
	//according to the fact whether we were able to fetch data or not
}





//payload is the data that the 'action' sends to the reducer
// PTR: Action --> Reducer --> Store --> Make View