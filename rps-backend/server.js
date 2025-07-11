const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const cors = require("cors");
app.use(cors({ origin: "http://localhost:5173" }));


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function findWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "It's a Tie";
    if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "You Win!";
    }
    return "Computer Wins!";
}

app.post('/play', (req, res) => {
    const { playerChoice } = req.body;
    const computerChoice = getComputerChoice();
    const result = findWinner(playerChoice, computerChoice);

    res.json({ playerChoice, computerChoice, result });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

