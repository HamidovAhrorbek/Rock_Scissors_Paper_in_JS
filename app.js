const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getResult() {
    if (computerChoice == userChoice) {
        result = 'Its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'You won!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'You lost!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'You won!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'You lost!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'You won!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'You lost!'
    }
    resultDisplay.innerHTML = result
}
