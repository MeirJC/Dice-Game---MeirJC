import "./Elements.css";

function Button(props) {
  let className = props.class
    ? `btn ${props.class}`
    : `btn ${props.gameOver ? " btnDisable " : ""}`;
  return (
    <button className={className} onClick={props.clickFunc}>
      {props.text}
    </button>
  );
}

export default Button;
