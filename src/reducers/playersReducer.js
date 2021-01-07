// import { merge } from 'lodash';
import { 
  UPDATE_CURRENT_PLAYER,
  UPDATE_PLAYER_RACK
} from '../actions/userActions';


// EXAMPLE REDUX STORE
// {
//    players: {
//      player1: [                  ARRAY (idx's refer to position on rack, nums refer to tileIds)
//       [ null, null, null, ...],  
//       [ 1,    2,    3,    ...], 
//       [ null, null, null, ...], 
//      ],    
//      ai:      { 13, 14, ... },   SET (no rack, no need to maintain order)
//      currentPlayer: 'player1',   STRING (also can be null or 'ai')
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
  player1: [
    [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ]
  ],
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

    case UPDATE_PLAYER_RACK:
      // action.name == 'Player1'
      // action.newRack == [ 1, null, 3, 10, ... ]  idx's refer to position on rack

      // replace player rack array w/ new Rack
      newState = Object.assign({}, oldState, {
        [action.name]: action.newRack
      });

      return newState;

    default:
      return oldState;
  }
};


export default players;