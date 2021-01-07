import Tile from './tile';


function Board() {
  // 6 x 16
  let grid = [
    [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ]
  ];

  // generate 6 rows
  let rows = grid.map((row, idx) => {

    // each row will contain 16 tiles
    var rowTiles = row.map((tiles, i) => {
      return (
        <Tile key={(idx + 1) + i} className="tile-wrap"/>
      );
    });

    return (
      <div 
        className="board-row"
        key={idx}
      >
        {rowTiles}
      </div>
    );
  });

  return (
    <div className="board-wrap">
      {rows}
    </div>
  );
}

export default Board;