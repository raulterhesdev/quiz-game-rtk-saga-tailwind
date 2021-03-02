import { all } from 'redux-saga/effects';
import gameInitSaga from './sagas/gameInit.saga';
import gameSaga from './sagas/game.saga';

export default function* rootSaga() {
  yield all([gameInitSaga(), gameSaga()]);
}
