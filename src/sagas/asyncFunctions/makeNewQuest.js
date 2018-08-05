import { take, put, call } from 'redux-saga/effects';
import fetchScenario from './fetchScenario.js';

import { startGameSucceeded, logError } from '../../actions/actions';
import Api from '../../api/index.js';

export default function* makeNewQuest(action) {
   try {
      const newQuestResponse = yield call( Api.makeNewQuest );
      yield put( startGameSucceeded(newQuestResponse.data) );
      yield call(fetchScenario, action, newQuestResponse.data);
   } catch (e) {
      yield put( logError(e) );
   }
}
