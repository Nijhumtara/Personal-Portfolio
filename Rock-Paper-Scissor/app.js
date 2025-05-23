let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);

    return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.style.backgroundColor = "#22333B";
        msg.innerText = `Congratulations! You Won, Your ${userChoice} beats ${compChoice}`;       
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = "#A9927D";
        msg.innerText = `You lose ${compChoice} beats Your ${userChoice}`;
        msg.classList.add(compmsg);
    }
}

const drawGame = () => {
     msg.innerText = "Game Was Draw! Play Again";
     msg.style.backgroundColor = "#0A0908";
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("UserChoice =",userChoice);
    console.log("CompChoice =",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor"? false : true;
        }
        else{
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choices was clicked");
        playGame(userChoice);
    });
});