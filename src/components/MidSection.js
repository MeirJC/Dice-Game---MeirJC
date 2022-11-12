import Dice from "./Dice";
import Button from "./Button";
import die1 from "../assets/diceSet3/1.png";
import die2 from "../assets/diceSet3/2.png";
import die3 from "../assets/diceSet3/3.png";
import die4 from "../assets/diceSet3/4.png";
import die5 from "../assets/diceSet3/5.png";
import die6 from "../assets/diceSet3/6.png";

// set initial dices to --> dices: [1, 1]
const diceImage = {
  1: die1,
  2: die2,
  3: die3,
  4: die4,
  5: die5,
  6: die6,
};

function MidSection(props) {
  return (
    <div className="midSection">
      <Dice id="dice1" image={diceImage[5]} />
      <Dice id="dice2" image={diceImage[5]} />
      <Button onClick={props.onClick} text="Roll" gameOver={props.gameOver} />
      <Button onClick={props.onClick} text="Hold" gameOver={props.gameOver} />
      {/* how to send to 2nd button other function??? */}
    </div>
  );
}

export default MidSection;
