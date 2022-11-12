// function onRollDice(){
//   let d = Math.floor(Ma)
// }
import Dice from "./Dice";
import Button from "./Button";
// set initial dices to --> dices: [1, 1]
const diceImage = {
  1: "../assets/diceSet3/1.png",
  2: "../assets/diceSet3/2.png",
  3: "../assets/diceSet3/3.png",
  4: "../assets/diceSet3/4.png",
  5: "../assets/diceSet3/5.png",
  6: "../assets/diceSet3/6.png",
};

function MidSection(props) {
  return (
    <div className="midSection">
      {/* <Dice id="dice1" img={diceImage[props.roll[0]]} /> */}
      {/* <Dice id="dice2" img={diceImage[props.roll[1]]} /> */}
      <Dice id="dice1" img={`"${diceImage[5]}"`} />
      <Dice id="dice2" img={diceImage[5]} />
      <Button onClick={props.onClick} text="Roll" gameOver={props.gameOver} />
      <Button onClick={props.onClick} text="Hold" gameOver={props.gameOver} />
      {/* how to send to 2nd button other function??? */}
    </div>
  );
}

export default MidSection;
