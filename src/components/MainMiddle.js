import React from 'react';
import Welcome from './welcome';
import { connect } from 'react-redux';
import { 
  updateCurrentPlayer,
  updatePlayerRack,
  removeTilesFromPouch
} from '../actions/userActions';
import {
  selectRandomTilesFromPouch
} from '../util/util';
import Board from './board';
import Rack from './rack';


const mapStateToProps = state => {
  return ({
    currentPlayer: state.players.currentPlayer,
    pouch: state.pouch
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
      pouch, updateCurrentPlayer, removeTilesFromPouch, updatePlayerRack
    } = this.props;

    updateCurrentPlayer('player1');

    // copy pouch so we don't accidently mutate it directly
    let newPouch = new Set(pouch);

    // randomly select 14 tiles from pouch
    let tilesToRemove = selectRandomTilesFromPouch(newPouch, 14);
    // tilesToRemove == [77, 42, 45, 17, 84, 61, 27, 36, 39, 96, 26, 55, 56, 40]

    // update redux store
    removeTilesFromPouch(tilesToRemove);
    
    let newRack = ['test'];
    
    // replace rack in Player1 w/ newTiles array
    updatePlayerRack(newRack, 'player1');
  }




  renderGame = ()=> {
    return (
      <>
        <Board />
        <Rack />
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