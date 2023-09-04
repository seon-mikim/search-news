import { combineReducers } from 'redux';
import newApiDataReducer from './newApiData';
const rootReducer = combineReducers({
	newsData: newApiDataReducer
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer