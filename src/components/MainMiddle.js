import React from 'react';
import Welcome from './welcome';
import { connect } from 'react-redux';
import { updateCurrentPlayer } from '../actions/userActions';
import Board from './board';
import Rack from './rack';


const mapStateToProps = state => {
  return ({
    currentPlayer: state.players.currentPlayer
  });
};


const mapDispatchToProps = dispatch => {
  return({
    updateCurrentPlayer: (name) => dispatch(updateCurrentPlayer(name))
  });
};


class MainMiddle extends React.Component {
  // constructor(props) {
  //   super(props);
  // }


  handleClickPlay = () => {
    const { updateCurrentPlayer } = this.props;
    updateCurrentPlayer('Player1');
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