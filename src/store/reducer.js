import { combineReducers } from 'redux';
import gameState from './slices/gameState.slice';
import quiz from './slices/quiz.slice';

export default combineReducers({ gameState, quiz });
