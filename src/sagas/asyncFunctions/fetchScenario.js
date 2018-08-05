import { apply, put } from 'redux-saga/effects';
import history from '../../history.js';

import Api from '../../api/index.js';
import { logError, setNewQuestLevel, setNewScenario } from '../../actions/actions';

export default function* fetchScenario(action, quest) {
  try {
    const questLevelResponse = yield apply(Api, Api.fetchQuestLevel, [quest.attributes.current_quest_level] );
    const scenarioResponse = yield apply(Api, Api.fetchScenario, [questLevelResponse.data.relationships.scenario.data.id] );
    yield put( setNewQuestLevel(questLevelResponse.data) )
    yield put( setNewScenario(scenarioResponse.data) )
    yield put({ type: 'OPEN_SCENARIO_MENU' })
    yield put({ type: 'OPEN_CHOOSE_CHARACTER_MENU' })
    yield apply(history, history.push, [`/questLevel/${questLevelResponse.data.id}/scenario/${scenarioResponse.data.id}`])
  } catch (e) {
    yield put( logError(e) );
  }
}
