//We create an action using JS
import {CHANGE_SEARCH_FIELD} from './constants.js';

export const setSearchField = (input) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

//payload is the data that the 'action' sends to the reducer
// PTR: Action --> Reducer --> Store --> Make View