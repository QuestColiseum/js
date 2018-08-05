import { takeLatest } from 'redux-saga/effects';

import makeNewQuest from './asyncFunctions/makeNewQuest.js';
import recruitAHero from './asyncFunctions/recruitAHero.js';

export default function* rootSaga() {
  yield takeLatest("START_GAME", makeNewQuest);
  yield takeLatest("CHOOSE_HERO", recruitAHero);
}
