import { connect } from 'react-redux';
import { chooseHero, invest, spend, recruit, upgrade, upgradeHero } from '../actions/actions';
import Scenario from '../components/Scenario';

const mapStateToProps = (state) => ({
  questLevel: state.questLevelReducer.get('questLevel'),
  scenario: state.questLevelReducer.get('scenario'),
  currentOpenTab: state.questLevelReducer.get('currentOpenTab'),
});

const mapDispatchToProps = (dispatch) => ({
  chooseHero: (characterId) => {
    dispatch( chooseHero(characterId) );
  },
  upgradeHero: (characterId) => {
    dispatch( upgradeHero(characterId) );
  },
  invest: () => {
    dispatch( invest() );
  },
  spend: () => {
    dispatch( spend() );
  },
  recruit: () => {
    dispatch( recruit() );
  },
  upgrade: () => {
    dispatch( upgrade() );
  },
});

const ScenarioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Scenario);
export default ScenarioContainer;
