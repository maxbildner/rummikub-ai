import { TILES } from '../util/tiles';


function Tile(props) {

  return (
    <div 
      // if tileId not null, add it's COLOR to class name
      className={ props.tileId ? "tile-wrap " + TILES[props.tileId].color : "tile-wrap" }
    >
      
      {/* If tileId null, empty slot in rack */}
      {props.tileId ? TILES[props.tileId].num : null}
    </div>
  );
}

export default Tile;