import React from 'react';
import Welcome from './welcome';
import { connect } from 'react-redux';
import { 
  updateCurrentPlayer,
  updatePlayerRack,
  removeTilesFromPouch
} from '../actions/userActions';
import {
  selectRandomTilesFromPouch,
  deepCopy2DArr
} from '../util/util';
import Board from './board';
import Rack from './rack';


const mapStateToProps = state => {
  return ({
    currentPlayer: state.players.currentPlayer,
    pouch: state.pouch,
    player1Rack: state.players.player1
  });
};


const mapDispatchToProps = dispatch => {
  return({
    updateCurrentPlayer: (name) => dispatch(updateCurrentPlayer(name)),
    updatePlayerRack: (newRack, name) => dispatch(updatePlayerRack(newRack, name)),
    removeTilesFromPouch: (tiles) => dispatch(removeTilesFromPouch(tiles))
  });
};


class MainMiddle extends React.Component {
  // constructor(props) {
  //   super(props);
  // }


  handleClickPlay = () => {
    const { 
      pouch, updateCurrentPlayer, removeTilesFromPouch, updatePlayerRack,
      player1Rack
    } = this.props;

    // update redux store
    updateCurrentPlayer('player1');

    // copy pouch so we don't accidently mutate it directly
    let newPouch = new Set(pouch);

    // randomly select 14 tiles from pouch
    let tilesDrawn = selectRandomTilesFromPouch(newPouch, 16);
    // tilesDrawn == [77, 42, 45, 17, 84, 61, 27, 36, 39, 96, 26, 55, 56, 40]

    // update redux store
    removeTilesFromPouch(tilesDrawn);
    
    let newRack = deepCopy2DArr(player1Rack);
    // newRack == [ [n, n, n,...], [], [] ]

    let firstRow = newRack[0];

    // loop through 1st row of newRack
    for (let i = 0; i < firstRow.length; i++) {
      
      // exit loop if no more tiles left from tilesDrawn array
      if (tilesDrawn.length === 0) break;

      // update newRack with tile drawn, and remove tile from tilesDrawn
      newRack[0][i] = tilesDrawn.pop();
    }
    
    // update redux store- replace rack in player1 w/ newRack array
    updatePlayerRack(newRack, 'player1');
  }


  renderGame = ()=> {
    // const { player1Rack } = this.props || [[]];
    const { player1Rack } = this.props;

    return (
      <>
        <Board />
        <Rack player1Rack={player1Rack}/>
      </>
    );
  }


  render() {
    const { currentPlayer } = this.props;

    return (
      <div className="mainmiddle-wrap">
        {currentPlayer ? this.renderGame(): <Welcome handleClickPlay={this.handleClickPlay}/>}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMiddle);