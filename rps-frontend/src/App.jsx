import { useState } from "react";
import axios from "axios";

function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const handleChoice = async (choice) => {
    setPlayerChoice(choice);
    try {
      const response = await axios.post("http://localhost:5000/play", { playerChoice: choice });
      setComputerChoice(response.data.computerChoice);
      setResult(response.data.result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Rock Paper Scissors</h1>
      <div>
        <button onClick={() => handleChoice("Rock")}>Rock</button>
        <button onClick={() => handleChoice("Paper")}>Paper</button>
        <button onClick={() => handleChoice("Scissors")}>Scissors</button>
      </div>
      {playerChoice && <p>You chose: {playerChoice}</p>}
      {computerChoice && <p>Computer chose: {computerChoice}</p>}
      {result && <h2>{result}</h2>}
    </div>
  );
}

export default App;
