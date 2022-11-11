import logo from "./assets/diceSet3/dice-target.svg";
import "./App.css";
import Dice from "./components/Dice";
import image1 from "./assets/diceSet3/1.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Under Construction...</h1>
        <Dice image={image1} />
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
