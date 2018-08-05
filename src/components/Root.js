import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Router} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import history from '../history.js';
import rootReducer from '../reducers/rootReducer';
import GameContainer from '../containers/GameContainer.js';
import ScenarioContainer from '../containers/ScenarioContainer.js';
import rootSaga from '../sagas/rootSaga.js';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default () => (
  <Provider store={store}>
    <Router history={history} >
      <Switch>
        <Route
          key="1"
          exact path="/"
          component={GameContainer}
        />
        <Route
          key="2"
          path="/questLevel/:id/scenario/:id/"
          component={ScenarioContainer}
        />
      </Switch>
    </Router>
  </Provider>
);
