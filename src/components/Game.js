import React from 'react';

const Game = props => (
  <div>
    <div onClick={()=>{
      props.startGame();
    }}>
      START
    </div>
  </div>
);
export default Game;
