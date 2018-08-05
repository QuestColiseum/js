import Immutable from 'immutable';

const initialState = Immutable.Map({
  questLevel: {},
  scenario: {},
  currentMenu: '',
  currentOpenTab: '',
});

const questLevelReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NEW_QUEST_LEVEL':
      return state.set('questLevel', action.questLevel)
    case 'OPEN_SCENARIO_MENU':
      return state.set('currentMenu', 'scenario')
    case 'OPEN_CHOOSE_CHARACTER_MENU':
      return state.set('currentOpenTab', 'character')
    case 'SET_NEW_SCENARIO':
      return state.set('scenario', action.scenario)
    default:
      return state;
  }
};

export default questLevelReducer;
