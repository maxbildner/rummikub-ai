import { connect } from 'react-redux';
import { TILES } from '../util/tiles';
import { 
  moveTileOnRack
} from '../util/util';
import { updatePlayerRack } from '../actions/userActions';


const mapStateToProps = state => {
  return ({
  });
};


const mapDispatchToProps = dispatch => {
  return ({
    updatePlayerRack: (newRack, name) => dispatch(updatePlayerRack(newRack, name))
  });
};


function Tile(props) {

  const { tileId, rowIdx, colIdx, playerRack, updatePlayerRack } = props;

  return (
    <div 
      // if tileId not null, add it's COLOR to class name, make it draggable
      className={tileId ? "tile-wrap " + TILES[tileId].color : "tile-wrap" }
      draggable={tileId ? true : false}

      // run callback once user starts to drag tile
      onDragStart={e => {
        console.log('START');
        
        // string representation of JSON object
        let tileInfo = `{ "row": ${rowIdx}, "col": ${colIdx}, "tileId": ${tileId} }`

        // put string obj in draggable payload
        e.dataTransfer.setData("draggedTile", tileInfo)
      }}

      onDragOver={e => {
        console.log('OVER');
        e.preventDefault();
      }}

      onDragEnter={e => {
        console.log('ENTER');
        e.preventDefault();
      }}

      onDrop={e => {
        console.log('DROP');
        // e.dataTransfer.getData("draggedTile") == '{ "row": 0, "col": 12, "tileId": 16 }'

        // convert string to OBJ
        let draggedTile = JSON.parse(e.dataTransfer.getData("draggedTile"));

        // dropped tile info
        let droppedTile = { row: rowIdx, col: colIdx, tileId: tileId };

        // move tile
        let newPlayerRack = moveTileOnRack(playerRack, draggedTile, droppedTile);

        // update redux store
        updatePlayerRack(newPlayerRack, 'player1');
      }}
    >
      
      {/* If tileId null, empty slot in rack */}
      {props.tileId ? TILES[props.tileId].num : null}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile);