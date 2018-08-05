import gameReducer from './gameReducer';
import questLevelReducer from './questLevelReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  gameReducer,
  questLevelReducer,
});
export default rootReducer;
