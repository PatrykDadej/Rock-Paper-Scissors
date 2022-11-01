
let variations = ["Rock","Paper","Scissors"]
/* Get random Output for computetr*/
function getComputerSelection() {
    th_element = Math.floor(Math.random()*variations.length)
    let result = variations[th_element]
    return result
}

function checkIfEnd(){
if (humanScore >=5 || computerScore >=5){
  if (humanScore>computerScore){
    update.textContent = "You Won"
  }
  else if (computerScore>humanScore){
    update.textContent = "You Lost"    
  }
  mainSelector.appendChild(playAgain)
  theGameDivSelector.removeChild(buttonsDivSelector)
  humanScore = 0
  computerScore = 0
  
}
}

function scoreChecker(currentHuman,currentComputer){
    if (currentHuman === "Rock" && currentComputer=== "Paper") {
        computerScore++
        update.textContent = `You lost, Paper beats Rock, the score is ${humanScore}, ${computerScore}`
    }   else if (currentHuman==="Rock" && currentComputer=== "Scissors") {
        humanScore++
        update.textContent =`You Won, Rock beats Scissors, the score is ${humanScore}, ${computerScore}`
    }   else if (currentHuman==="Rock" && currentComputer==="Rock"){
        update.textContent ="Draw"
    }   else if (currentHuman === "Paper" && currentComputer=== "Scissors") {
        computerScore++
        update.textContent =`You lost, Scissors beats Paper, the score is ${humanScore}, ${computerScore}`
    }   else if (currentHuman==="Paper" && currentComputer=== "Rock") {
        humanScore++
        update.textContent =`You Won, Paper beats Rock, the score is ${humanScore}, ${computerScore}`
    }   else if (currentHuman==="Paper" && currentComputer==="Paper"){
        update.textContent ="Draw"
    }   else if (currentHuman === "Scissors" && currentComputer=== "Rock") {
        computerScore++
        update.textContent =`You lost, Rock beats Scissors, the score is ${humanScore}, ${computerScore}`
    }   else if (currentHuman==="Scissors" && currentComputer=== "Paper") {
        humanScore++
        update.textContent =`You Won, Scissors beats Paper, the score is ${humanScore}, ${computerScore}`
    }   else if (currentHuman==="Scissors" && currentComputer==="Scissors"){
        update.textContent ="Draw"}
}

const startGameSelector = document.querySelector('.startGame')
const mainSelector = document.querySelector('.main')
const theGameDivSelector = document.querySelector('.theGame')
theGameDivSelector.setAttribute('style',"display:flex; flex-direction:column; align-items:center")

const buttonsDivSelector = document.createElement('div')
const roundUpdatesDivSelector = document.createElement('div')
const update = document.createElement('p')
const playAgain = document.createElement('button')
playAgain.textContent = "Play Again"
playAgain.addEventListener("click",() =>{
  theGameDivSelector.appendChild(buttonsDivSelector)
  mainSelector.removeChild(playAgain)
  theGameDivSelector.removeChild(update)
})

const rockButton = document.createElement('button')
rockButton.classList.add("option")
rockButton.textContent="Rock"
rockButton.setAttribute('style','margin:10px; padding: 25px;')
rockButton.setAttribute('id',"rocky")

const paperButton = document.createElement('button')
paperButton.classList.add("option")
paperButton.textContent="Paper"
paperButton.setAttribute('style','margin:10px; padding: 25px;')
paperButton.setAttribute('id',"papery")

const scissorsButton = document.createElement('button')
scissorsButton.classList.add("option")
scissorsButton.textContent="Scissors"
scissorsButton.setAttribute('style','margin:10px; padding: 25px;')
scissorsButton.setAttribute('id',"scissorsy")

buttonsDivSelector.appendChild(rockButton)
buttonsDivSelector.appendChild(paperButton)
buttonsDivSelector.appendChild(scissorsButton)

let currentHuman
let currentComputer

let computerScore
let humanScore


  theGameDivSelector.appendChild(buttonsDivSelector)
  const optionButtons = document.querySelectorAll('.option')
  optionButtons.forEach((element) => {
    humanScore=0
    computerScore=0
    element.addEventListener('click', function() {
     element.value = element.textContent
      currentComputer = getComputerSelection()
      currentHuman = element.value
      scoreChecker(currentHuman,currentComputer)
      theGameDivSelector.appendChild(update)
      checkIfEnd()
      
})
})