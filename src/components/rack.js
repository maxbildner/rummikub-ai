import Tile from './tile';


function Rack(props) {

  // lazy initialization to prevent undefined error
  // const { player1Rack } = props || [[]];    
  const { player1Rack } = props;    

  // player1Rack 3 x 16 == 
  // let grid = [
  //   [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  //   [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  //   [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  // ];

  // generate 3 rows
  let rows = player1Rack.map((row, idx) => {
    
    // each row will contain 16 tiles
    var rowTiles = row.map((tileId, i) => {
      
      return (
        <Tile 
          key={(idx + 1) + i} 
          className="rack-tile-wrap" 
          tileId={tileId}
        />
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
}

export default Rack;