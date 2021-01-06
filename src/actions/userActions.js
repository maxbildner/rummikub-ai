// use constants incase there's a typo, we fail loudly
export const UPDATE_CURRENT_PLAYER = "UPDATE_CURRENT_PLAYER";


// ACTION CREATORS
export const updateCurrentPlayer = (name) => {

  return ({
    type: UPDATE_CURRENT_PLAYER,
    name
  });
}