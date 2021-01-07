// import { UPDATE_PLAYER_RACK } from '../actions/userActions';
import { REMOVE_TILES_FROM_POUCH } from '../actions/userActions';


// prepopulated players slice of store
const predefinedState = new Set();

// add 106 tiles to pouch (tiles 105 and 106 are jokers)
for (let i = 1; i <= 106; i++) {
  predefinedState.add(i);
}

// predefinedState == SET { 55, 52, ... }        (nums refer to tile IDs)


const pouch = (oldState = predefinedState, action) => {

  // prevent us from accidentally mutating state
  Object.freeze(oldState);

  let newState;

  switch (action.type) {

    // deletes tiles in pouch that have id's in action.newTiles
    // case UPDATE_PLAYER_RACK:
    case REMOVE_TILES_FROM_POUCH:

      // copy oldState into new state to avoid overwriting oldState
      newState = new Set(oldState);

      // action.name == 'Player1'
      // action.tiles == []     nums refer to tileIds, idx's refer to position in player rack

      // loop over tiles, delete tile in pouch
      for (let i = 0; i < action.tiles.length; i++) {
        newState.delete(action.tiles[i]);
      }

      return newState;

    default:
      return oldState;
  }
};


export default pouch;