import Bars from "./Bars";
import "./Labels.css";

const Labels = (props) => {
  const labels = props.data.map((data) => {
    return (
      <div className="label-container" key={data.id}>
        <label value={data.label}>{data.label}</label>
        <Bars recieved={data.amount} amount={props.total} />
      </div>
    );
  });

  return <div className="labels-container">{labels}</div>;
};

export default Labels;
