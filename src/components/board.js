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

  let rows = grid.map((row, idx) => {
    let rowTiles = row.map((tiles, i) => {
      return (
        <>
          <Tile index={(i + 1) * 100}/>
        </>
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