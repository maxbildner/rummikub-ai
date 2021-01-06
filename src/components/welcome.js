


function Welcome(props) {
  return (
    <div className="welcome-wrap">
      <div>Welcome! Press play to begin</div>
      <button 
        className="play"
        onClick={props.handleClickPlay}
      >PLAY</button>
    </div>
  );
}

export default Welcome;