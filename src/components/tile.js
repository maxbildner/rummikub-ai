import { TILES } from '../util/tiles';


function Tile(props) {

  // debugger
  return (
    <div 
      className="tile-wrap"
    >
      {/* Tile */}
      {props.tileId ? TILES[props.tileId].num : null}
    </div>
  );
}

export default Tile;