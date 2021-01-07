// use constants incase there's a typo, we fail loudly
export const UPDATE_CURRENT_PLAYER = "UPDATE_CURRENT_PLAYER";
export const UPDATE_PLAYER_RACK = "UPDATE_PLAYER_RACK";
export const REMOVE_TILES_FROM_POUCH = "REMOVE_TILES_FROM_POUCH";



// ACTION CREATORS
export const updateCurrentPlayer = (name) => {

  return ({
    type: UPDATE_CURRENT_PLAYER,
    name
  });
}


export const updatePlayerRack = (newRack, name) => {

  return ({
    type: UPDATE_PLAYER_RACK,
    newRack,
    name
  });
}


// tiles == tiles to delete from pouch
export const removeTilesFromPouch = (tiles) => {

  return ({
    type: REMOVE_TILES_FROM_POUCH,
    tiles
  });
}