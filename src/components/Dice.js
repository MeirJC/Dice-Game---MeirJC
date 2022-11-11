import "./Dice.css";

function Dice(props) {
  return <img id={props.class} className="dice" alt="dice" src={props.image} />;
}

export default Dice;
