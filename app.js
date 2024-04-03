let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock, paper, scissors
}


const drawGame = () => {
    console.log("game was draw!");
    msg.innerText = "Game was Draw. Play Again!";
}

const showWinner = (userWin) => {
    if(userWin) {
        console.log("you win!");
        msg.innerText = "You Win!";
        msg.style.backgroundcolor = "green";
    } else {
        console.log("you lose!");
        msg.innerText = "You Lose!";
        
    }
};

const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    //Generate the comp choice 
    const compChoice = genCompChoice();
    console.log("comp Choice = ", compChoice);

    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true; 
        }
      showWinner(userWin); 
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});