import { take, race, delay, put } from 'redux-saga/effects';
import {
  fetchQuestionsSuccess,
  answerQuestion,
  nextQuestion,
} from '../slices/quiz.slice';
import { finishGame } from '../slices/gameState.slice';

function* answersSaga() {
  for (let i = 0; i < 10; i++) {
    yield take(answerQuestion.type);
    yield put(nextQuestion());
  }
}

export default function* gameSaga() {
  while (true) {
    yield take(fetchQuestionsSuccess.type);

    yield race({
      delay: delay(60000),
      done: answersSaga(),
    });

    yield put(finishGame());
  }
}
