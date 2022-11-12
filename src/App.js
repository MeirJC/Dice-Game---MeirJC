import logo from "./assets/diceSet3/dice-target.svg";
import "./App.css";
import MidSection from "./components/MidSection";
import { useState } from "react";
import Player from "./components/Player";
//--------------------------------------------------------------------

function App() {
  const [game, setGame] = useState({
    dice1: 1,
    dice2: 1,
    playerHoldSwitch: true,
    currentRoll: 0,
    player1Score: 0,
    player2Score: 0,
  });
  function onRollDice() {
    const d = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    const turnTotal = d.reduce((current, total) => current + total);
    turnTotal === 12 && on66();
    setGame((prevValue) => {
      return {
        ...prevValue,
        dice1: d[0],
        dice2: d[1],
        currentRoll: prevValue.currentRoll + turnTotal,
      };
    });
  }
  function onHold() {
    if (game.currentRoll > 0) {
      if (game.playerHoldSwitch) {
        setGame((prevValue) => {
          return {
            ...prevValue,
            player1Score: prevValue.player1Score + prevValue.currentRoll,
            currentRoll: 0,
            playerHoldSwitch: false,
          };
        });
      } else {
        setGame((prevValue) => {
          return {
            ...prevValue,
            player2Score: prevValue.player2Score + prevValue.currentRoll,
            currentRoll: 0,
            playerHoldSwitch: true,
          };
        });
      }
      console.log(game);
    }
  }
  function newGame() {
    setGame((prevValue) => {
      return {
        ...prevValue,
        dice1: 1,
        dice2: 1,
        playerHoldSwitch: true,
        currentRoll: 0,
        player1Score: 0,
        player2Score: 0,
      };
    });
  }
  function on66() {
    if (game.playerHoldSwitch) {
      setGame((prevValue) => {
        return {
          ...prevValue,
          player1Score: 0,
          currentRoll: 0,
          playerHoldSwitch: false,
        };
      });
    } else {
      setGame((prevValue) => {
        return {
          ...prevValue,
          player2Score: 0,
          currentRoll: 0,
          playerHoldSwitch: false,
        };
      });
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="currentHeader">
            Current turn score: {game.currentRoll}
          </h3>
        </div>
        <div className="gameContainer">
          <Player
            className="p1container"
            PlayerName="Player 1"
            playerScore={game.player1Score}
          ></Player>
          <MidSection
            className="midSection"
            onRollDice={onRollDice}
            onHold={onHold}
            newGame={newGame}
            game={game}
          />
          <Player
            PlayerName="Player 2"
            playerScore={game.player2Score}
          ></Player>
        </div>
      </header>
    </div>
  );
}

export default App;
