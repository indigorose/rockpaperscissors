function game() {

    const RPS = ["rock", "paper", "scissors"];

    function computerPlay() {
        return RPS[Math.floor(Math.random() * RPS.length)];
        // console.log(typeof (shuffle));
    };
    function playRound(playerSelection, computerSelection) {

        if (computerSelection === "scissors" && playerSelection === "rock" || computerSelection === "paper" && playerSelection === "scissors" || computerSelection === "rock" && playerSelection === "paper") {
            return "you win!";
        } else if (playerSelection === computerSelection) {
            return "Its a draw!"; // your code here!
        } else {
            return "you lost!";
        }
    }
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log("Player has played " + playerSelection);
    console.log("Computer has played " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
};

function playerPlay() {
        return game();
};


document.getElementById("rock").addEventListener("click", playerPlay);
