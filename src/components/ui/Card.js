import calsses from "./Card.module.css";
function Card(props) {
  return <div className={calsses.Card}>{props.children}</div>;
}

export default Card;
