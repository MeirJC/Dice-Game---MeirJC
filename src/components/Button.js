import "./Elements.css";

function Button({ clickFunc, text, clas }) {
  return (
    <button className={clas} onClick={clickFunc}>
      {text}
    </button>
  );
}

export default Button;
