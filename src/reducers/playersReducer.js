// import { merge } from 'lodash';


// prepopulated players slice of store
const predefinedState = {
  player1: {},
  ai: {}
};


const players = (oldState=predefinedState, action) => {
  
  // prevent us from accidentally mutating state
  Object.freeze(oldState);

  // let newState;

  return oldState;
};


export default players;