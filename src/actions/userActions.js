// use constants incase there's a typo, we fail loudly
export const UPDATE_CURRENT_PLAYER = "UPDATE_CURRENT_PLAYER";
export const UPDATE_PLAYER_RACK = "UPDATE_PLAYER_RACK";


// ACTION CREATORS
export const updateCurrentPlayer = (name) => {

  return ({
    type: UPDATE_CURRENT_PLAYER,
    name
  });
}


export const updatePlayerRack = (quantity, name) => {

  return ({
    type: UPDATE_PLAYER_RACK,
    quantity,
    name
  });
}