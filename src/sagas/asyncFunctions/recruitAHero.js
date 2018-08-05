import { apply, put } from 'redux-saga/effects';

import Api from '../../api/index.js';
import { logError } from '../../actions/actions';
import history from '../../history.js';

export default function* recruitAHero(action) {
   try {
      const gambit = yield apply(Api, Api.postHeroSelection, [action.params] );
      if (gambit.data.attributes.is_final_gambit) {
         yield apply(history, history.push, ['/'])
      }
   } catch (e) {
      yield put( logError(e) );
   }
}
