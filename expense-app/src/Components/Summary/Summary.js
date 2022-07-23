import "./Summary.css";

const Summary = (props) => {
  const amount = props.data.map((data) => data.amount);
  const label = props.data.filter(
    (data) => data.amount === Math.max(...amount)
  );

  const condition = () => {
    if (label.length === props.data.length) {
      return "No results";
    } else {
      return label[0].label;
    }
  };

  return (
    <div className="summary-container">
      <h2>Spending Total</h2>
      <p className="total">
        <span>$</span>
        {props.amount}
      </p>
      <h2>Highest Spending</h2>
      <p className="highest">{condition()}</p>
    </div>
  );
};

export default Summary;
