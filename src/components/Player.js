import "./Elements.css";

function Player({ PlayerName, playerScore }) {
  return (
    <div className="playerContainer">
      <div className="playerTitle">
        <h1>{PlayerName}</h1>
      </div>
      <div className="winMessage">
        <h3>{PlayerName} is the WINNER!</h3>
      </div>
      <div className="scoreContainer">
        <h2>Score</h2>
        <h2>{playerScore}</h2>
      </div>
    </div>
  );
}

export default Player;
