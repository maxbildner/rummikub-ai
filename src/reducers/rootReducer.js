import { combineReducers } from 'redux';
import players from './playersReducer';
import pouch from './pouchReducer';


const rootReducer = combineReducers({
  players,
  pouch
});

export default rootReducer;


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