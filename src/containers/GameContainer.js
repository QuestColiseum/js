import { connect } from 'react-redux';
import { startGame } from '../actions/actions';
import Game from '../components/Game';

const mapStateToProps = (state) => ({
  quest: state.gameReducer.get('quest'),
});

const mapDispatchToProps = (dispatch) => ({
  startGame: () => {
    dispatch(startGame());
  },
});

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
export default GameContainer;
