// import { merge } from 'lodash';


// EXAMPLE REDUX STORE
// {
//    players: {
//      player1: { 10, 11, ... }    SET (nums refer to tile IDs)
//      ai:      { 13, 14, ... }    SET
//    },
//
//    board: {
//      runs: {
//        0: [ 0, 1, 2, ... ],      ARRAY (nums refer to tile IDs)
//        1: [ 3, 4, 5, ... ],      ARRAY (nums refer to tile IDs)
//      }
//      groups: { 
//        0: [ 6, 19, 33, ... ],    ARRAY (nums refer to tile IDs)
//      },
//    },
//
//    boughtIn: {
//      player1: false,             BOOLEAN
//      ai: false,                  BOOLEAN
//    },
//    
//    currentPlayer: 'player1'      STRING (also can be null or 'ai'),
//    
//    timeRemaining:                DATEOBJ
//
// }


// prepopulated players slice of store
const predefinedState = {
  player1: new Set(),
  ai: new Set()
};


const players=(oldState=predefinedState, action) => {
  
  // prevent us from accidentally mutating state
  Object.freeze(oldState);

  // let newState;

  return oldState;
};


export default players;