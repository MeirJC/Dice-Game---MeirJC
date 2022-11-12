import logo from "./assets/diceSet3/dice-target.svg";
import "./App.css";
import Dice from "./components/Dice";
import image1 from "./assets/diceSet3/1.png";
import Button from "./components/Button";
import MidSection from "./components/MidSection";
//--------------------------------------------------------------------
let tesobj = {
  diceimg: image1,
  text: "BUTTONNNN",
  gameOver: false,
};

function onRollDice() {
  const d = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
  ];
  console.log(d);
  const turnTotal = d.reduce((current, total) => current + total);
  console.log(turnTotal);
  // then update state
  //  set current dice image state to ({ dices: d });
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Under Construction...</h1>
        <p>12/11/22 2:11am update: I hate this task</p>
        <Dice image={tesobj.diceimg} />
        <Button text={tesobj.text} onClick={onRollDice} />
        <MidSection onClick={onRollDice} />
      </header>
    </div>
  );
}

export default App;

//-----
// UNDER CONSTRUVCTION
//-----
/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1>Under Construction...</h1>
</header>
</div> */
