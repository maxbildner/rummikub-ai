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