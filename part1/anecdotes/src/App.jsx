import { useState } from "react";

const HighestVotedAnecdote = ({ votes, anecdotes }) => {
  const copyArray = [...votes];
  const sortVotes = copyArray.sort((a, b) => b - a);
  const highVotes = sortVotes[0];
  const mostVotedAnecdoteIndex = votes.findIndex(
    (value) => value === highVotes,
  );
  return (
    <>
      <div>{anecdotes[mostVotedAnecdoteIndex]}</div>
      <div>has {highVotes} votes</div>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const handleAnecdotesClick = () => {
    const randomNumber = Math.floor(Math.random() * 8);
    setSelected(randomNumber);
  };

  const handleVotes = () => {
    const points = [...votes];
    setVotes(points, (points[selected] += 1));
  };

  return (
    <>
      <div
        style={{ fontWeight: "bold", fontSize: "30px", marginBottom: "5px" }}
      >
        Anecdote of the day
      </div>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <div>
        <button onClick={handleVotes}>vote</button>
        <button onClick={handleAnecdotesClick}>next anecdotes</button>
      </div>
      <div
        style={{ fontWeight: "bold", fontSize: "30px", marginBottom: "5px" }}
      >
        Anecdote with most votes
      </div>
      <HighestVotedAnecdote votes={votes} anecdotes={anecdotes} />
    </>
  );
};

export default App;
