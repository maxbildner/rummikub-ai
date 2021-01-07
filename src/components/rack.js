import Tile from './tile';


function Rack() {
  // 3 x 16
  let grid = [
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  ];

  // generate 3 rows
  let rows = grid.map((row, idx) => {

    // each row will contain 16 tiles
    var rowTiles = row.map((tiles, i) => {
      return (
        <Tile key={(idx + 1) + i} className="rack-tile-wrap" />
      );
    });

    return (
      <div
        className="rack-row"
        key={idx}
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

  // return (
  //   <div className="rack-wrap">
  //     Rack
  //   </div>
  // );
}

export default Rack;