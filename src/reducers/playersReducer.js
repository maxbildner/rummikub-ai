// import { merge } from 'lodash';
import { UPDATE_CURRENT_PLAYER } from '../actions/userActions';


// EXAMPLE REDUX STORE
// {
//    players: {
//      player1: { 10, 11, ... }    SET (nums refer to tile IDs)
//      ai:      { 13, 14, ... }    SET
//      currentPlayer: 'player1'    STRING (also can be null or 'ai')
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
//    pouch: { 55, 52, ... }        SET (nums refer to tile IDs)
//
//    boughtIn: {
//      player1: false,             BOOLEAN
//      ai: false,                  BOOLEAN
//    },
//    
//    timeRemaining:                DATEOBJ
//
// }


// prepopulated players slice of store
const predefinedState = {
  player1: new Set(),
  ai: new Set(),
  currentPlayer: null
};


const players=(oldState=predefinedState, action) => {
  
  // prevent us from accidentally mutating state
  Object.freeze(oldState);

  let newState;

  switch (action.type) {
    case UPDATE_CURRENT_PLAYER:
      newState = Object.assign({}, oldState, {
        currentPlayer: action.name
      });

      return newState;

    default:
      return oldState;
  }
};


export default players;