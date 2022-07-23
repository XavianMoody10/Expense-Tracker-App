import "./App.css";
import Summary from "./Components/Summary/Summary";
import Add from "./Components/Add/Add";
import Progress from "./Components/Progress/Progress";
import React, { useState } from "react";

function App() {
  const data = [
    {
      id: "1",
      label: "Bills",
      amount: 0,
    },
    {
      id: "2",
      label: "School",
      amount: 0,
    },
    {
      id: "3",
      label: "Travel",
      amount: 0,
    },
    {
      id: "4",
      label: "Shopping",
      amount: 0,
    },
    {
      id: "5",
      label: "Entertainment",
      amount: 0,
    },
  ];

  const [amount, setAmount] = useState(0);
  const [label, setLabel] = useState("");
  const [newData, setNewData] = useState(data);

  const getFormData = (newAmount, newLabel) => {
    setAmount(() => amount + Number(newAmount));
    setLabel(newLabel);

    setNewData(
      newData.map((d) => {
        if (d.label === newLabel) {
          return { ...d, amount: d.amount + Number(newAmount) };
        } else {
          return d;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="grid-container">
        <Summary amount={amount.toFixed(2)} data={newData} />
        <Add getFormData={getFormData} />
        <Progress amount={amount} label={label} data={newData} />
      </div>
    </div>
  );
}

export default App;
