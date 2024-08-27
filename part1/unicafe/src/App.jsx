import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
  <tbody>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  </tbody>
);

const Statistics = ({ good, neutral, bad, totalCount }) => {
  const average = (good - bad) / totalCount;
  const roundedAverage = average.toFixed(1);
  const positive = (good / totalCount) * 100;
  const roundedPositive = positive.toFixed(1);

  if (totalCount === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <table>
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"all"} value={totalCount} />
      <StatisticLine text={"average"} value={roundedAverage} />
      <StatisticLine text={"positive"} value={roundedPositive + "%"} />
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotalCount(updatedGood + neutral + bad);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotalCount(updatedNeutral + good + bad);
  };
  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotalCount(updatedBad + neutral + good);
  };

  return (
    <>
      <div
        style={{ fontWeight: "bold", fontSize: "30px", marginBottom: "20px" }}
      >
        give feedback
      </div>
      <Button onClick={handleGoodClick} text={"good"} />
      <Button onClick={handleNeutralClick} text={"neutral"} />
      <Button onClick={handleBadClick} text={"bad"} />
      <div style={{ fontWeight: "bold", fontSize: "30px" }}>statistics</div>

      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        totalCount={totalCount}
      />
    </>
  );
};

export default App;
