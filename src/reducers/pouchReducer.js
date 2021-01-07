// prepopulated players slice of store
const predefinedState = new Set();

// add 106 tiles to pouch (tiles 105 and 106 are jokers)
for (let i = 1; i <= 106; i++) {
  predefinedState.add(i);
}


const pouch = (oldState = predefinedState, action) => {

  // prevent us from accidentally mutating state
  Object.freeze(oldState);

  // let newState;

  // switch (action.type) {
  //   case UPDATE_CURRENT_PLAYER:
  //     newState = Object.assign({}, oldState, {
  //       currentPlayer: action.name
  //     });

  //     return newState;

  //   default:
  //     return oldState;
  // }

  return oldState
};


export default pouch;