import { connect } from 'react-redux';

const mapStateToProps = state => {
  return ({
    currentPlayer: state.players.currentPlayer
  });
};


const mapDispatchToProps = dispatch => {
  return ({
  });
};


function SideBarLeft(props) {
  return (
    <div className="sidebarleft-wrap">
      <div>Current Player: </div>
      {props.currentPlayer}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarLeft);