// prepopulated players slice of store
const predefinedState = {
  currentPlayer: null             // can be STRING ex. 'player1' or 'ai'
};


const currentPlayer = (oldState = null, action) => {

  // prevent us from accidentally mutating state
  Object.freeze(oldState);

  // let newState;

  return oldState;
};


export default currentPlayer;