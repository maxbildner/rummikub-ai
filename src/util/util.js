// HELPER FUNCTIONS

// SELECT RANDOM NUM FROM 0 to MAX (inclusive of both)
export function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}


// RETURNS ARRAY OF TILE NUMS FROM POUCH (non-mutative of inputs)
// pouch == SET { 1, 2, ... 106 }
// numTiles == 14
// return ex. => [ 1, 2 ]       // nums refer to tileIDs
export function selectRandomTilesFromPouch(pouch, numTiles) {
  let tilesDrawn = [];

  // create array of set values (tiles)   O(N) TIME, N = pouch size
  let pouchArr = [...pouch];

  // select random tile from pouch numTiles times
  while (tilesDrawn.length < numTiles) {

    // select random idx in pouchArr
    let randomIdx = getRandomInt(pouchArr.length - 1);
  
    // swap last num in pouchArr w/ num @ randomIdx
    [ pouchArr[pouchArr.length - 1], pouchArr[randomIdx] ] =
    [ pouchArr[randomIdx], pouchArr[pouchArr.length - 1] ];

    // tile integer refers to tileId        O(1) TIME
    let tile = pouchArr.pop();

    // add to tilesDrawn array
    tilesDrawn.push(tile);
  }

  return tilesDrawn;
}


// DEEP COPY 2D ARRAY
// [ [null, null], [1, 2] ] => [ [null, null], [1, 2] ]
export function deepCopy2DArr(arr) {
  let newArr = [];

  arr.forEach((row, idx) => {
    newArr.push(row.slice());
  });

  return newArr;
}



// MOVES TILE FROM DRAGGED TO DROPPED
// returns new 2d array rack of tiles
// draggedTile == { row: 0, col: 0, tileId: 32 }
// droppedTile == { row: 1, col: 2, tileId: 1 }
export function moveTileOnRack(oldPlayerRack, draggedTile, droppedTile) {

  let newPlayerRack = deepCopy2DArr(oldPlayerRack);

  let isDroppedLocationEmpty = droppedTile.tileId === null;

  if (isDroppedLocationEmpty) {
    
    // update dropped tile location w/ dragged tile id
    newPlayerRack[droppedTile.row][droppedTile.col] = draggedTile.tileId;
    
    // dropping on location w/ tile, so move tiles
  } else {
    
    // grab tiles from dropped location to end of row (null)
    let tilesToShift = oldPlayerRack[droppedTile.row].slice(droppedTile.col);
    
    // remove nulls at end
    tilesToShift = tilesToShift.filter(tile => tile !== null);
    
    debugger

    // update dropped tile location w/ dragged tile id
    newPlayerRack[droppedTile.row][droppedTile.col] = draggedTile.tileId;
    
    debugger

    // number of tiles from dropped (exclusive) to end / null
    let numTimesToLoop = droppedTile.col + tilesToShift.length + 1;

    let j = 0;

    // loop from dropped tile's idx + 1 number of times == tilesToShift
    for (let i = droppedTile.col + 1; i < numTimesToLoop; i++ ) {
      
      debugger
      // update dropped tile location w/ dragged tile id
      newPlayerRack[droppedTile.row][i] = tilesToShift[j];

      j++;
      debugger
    }

    debugger
  }


  // update dragged tile location empty
  newPlayerRack[draggedTile.row][draggedTile.col] = null;

  return newPlayerRack;
}