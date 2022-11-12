import logo from "./assets/diceSet3/dice-target.svg";
import "./App.css";
import MidSection from "./components/MidSection";
//--------------------------------------------------------------------

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
        <p>12/11/22 4:51pm update: I really hate this task</p>
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
