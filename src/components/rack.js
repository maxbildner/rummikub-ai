import TileContainer from './tile';
import React from 'react';


function Rack(props) {

  const { player1Rack } = props;    

  // player1Rack 3 x 16 == 
  // let grid = [
  //   [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  //   [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  //   [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  // ];

  // generate 3 rows
  let rows = player1Rack.map((row, rowIdx) => {
    
    // each row will contain 16 tiles
    var rowTiles = row.map((tileId, colIdx) => {
      
      return (
        <TileContainer
          key={(rowIdx + 1) + colIdx} 
          className="rack-tile-wrap" 
          tileId={tileId}
          rowIdx={rowIdx}
          colIdx={colIdx}
          playerRack={player1Rack}
        />
      );
    });

    return (
      <div
        className="rack-row"
        key={rowIdx}
      >
        {rowTiles}
      </div>
    );
  });

  return (
    <div className="rack-wrap">
      {rows}
    </div>
  );
}

export default Rack;