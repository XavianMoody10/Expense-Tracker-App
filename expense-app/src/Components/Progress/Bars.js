import "./Bars.css";
const Bars = (props) => {
  return <progress value={props.recieved} max={props.amount}></progress>;
};

export default Bars;
