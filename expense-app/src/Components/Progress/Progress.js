import Labels from "./Labels";
import "./Progress.css";

const Progress = (props) => {
  return (
    <div className="progress-container">
      <Labels data={props.data} total={props.amount} />
    </div>
  );
};

export default Progress;
