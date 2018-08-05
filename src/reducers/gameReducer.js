import Immutable from 'immutable';

const initialState = Immutable.Map({
  quest: {}
});

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME_SUCCEEDED':
      return state.set('quest', action.quest)
    default:
      return state;
  }
};

export default gameReducer;
