let currentHuman
let currentComputer

let computerScore = 0
let humanScore = 0

let variations = ["Rock","Paper","Scissors"]

/* Get random Output for computetr*/
function getComputerSelection() {
  th_element = Math.floor(Math.random()*variations.length)
  let result = variations[th_element]
  return result
}

/* Checks after each round if either Human or Computer reached score of 5
and finished the game if so */
function checkIfEnd(){
  if (humanScore >=5 || computerScore >=5){
    update.style.fontSize = "50px"
    if (humanScore>computerScore){
      update.textContent = "Victory !"
    }
    else if (computerScore>humanScore){
      update.textContent = "Defeat"    
    }
  mainSelector.appendChild(playAgain)
  theGameDivSelector.removeChild(buttonsDivSelector)
  theGameDivSelector.removeChild(currentScoreHeaders)
  theGameDivSelector.removeChild(currentScore)
  humanScore=0
  computerScore=0
  }
}
/* The main logic engine*/
function scoreChecker(currentHuman,currentComputer){
    update.style.fontSize = "17px"
    if ((currentHuman === "Rock" && currentComputer=== "Paper") || (currentHuman === "Paper" && currentComputer=== "Scissors") || (currentHuman === "Scissors" && currentComputer=== "Rock")) {
        computerScore++
        update.textContent = `You lost this round, ${currentComputer} beats ${currentHuman}`
        currentScoreHeaders.textContent = "Current Score Is:"
        currentScore.textContent = `${humanScore} - ${computerScore}`
    }   else if ((currentHuman==="Rock" && currentComputer=== "Scissors") || (currentHuman==="Scissors" && currentComputer=== "Paper") || (currentHuman==="Paper" && currentComputer=== "Rock")) {
        humanScore++
        update.textContent =`You Won this round, ${currentHuman} beats ${currentComputer}`
        currentScoreHeaders.textContent = "Current Score Is:"
        currentScore.textContent = `${humanScore} - ${computerScore}`
    }   else if ((currentHuman==="Scissors" && currentComputer==="Scissors") || (currentHuman==="Rock" && currentComputer==="Rock") || (currentHuman==="Paper" && currentComputer==="Paper")){
        update.textContent ="Round finished with draw"}
        currentScoreHeaders.textContent = "Current Score Is:"
        currentScore.textContent = `${humanScore} - ${computerScore}`
}

const mainSelector = document.querySelector('.main')
const theGameDivSelector = document.querySelector('.theGame')
theGameDivSelector.setAttribute('style',"display:flex; flex-direction:column; align-items:center")

const buttonsDivSelector = document.createElement('div')
buttonsDivSelector.classList.add("buttonsDiv")
const roundUpdatesDivSelector = document.createElement('div')
const update = document.createElement('p')

const currentScoreHeaders = document.createElement('p')
const currentScore = document.createElement('p')
currentScore.classList.add("currentScore")

const playAgain = document.createElement('button')
playAgain.classList.add("playAgain")

playAgain.textContent = "Play Again"
playAgain.addEventListener("click",() =>{
  theGameDivSelector.appendChild(buttonsDivSelector)
  mainSelector.removeChild(playAgain)
  theGameDivSelector.removeChild(update)
  theGameDivSelector.removeChild(currentScoreHeaders)
  theGameDivSelector.removeChild(currentScore)
})

const rockButton = document.createElement('button')
rockButton.classList.add("option")
rockButton.textContent="Rock"
rockButton.setAttribute('id',"rocky")

const paperButton = document.createElement('button')
paperButton.classList.add("option")
paperButton.textContent="Paper"
paperButton.setAttribute('id',"papery")

const scissorsButton = document.createElement('button')
scissorsButton.classList.add("option")
scissorsButton.textContent="Scissors"
scissorsButton.setAttribute('id',"scissors")

buttonsDivSelector.appendChild(rockButton)
buttonsDivSelector.appendChild(paperButton)
buttonsDivSelector.appendChild(scissorsButton)

  theGameDivSelector.appendChild(buttonsDivSelector)
  const optionButtons = document.querySelectorAll('.option')
  optionButtons.forEach((element) => {
    element.addEventListener('click', function() {
     element.value = element.textContent
      currentComputer = getComputerSelection()
      currentHuman = element.value
      scoreChecker(currentHuman,currentComputer)
      theGameDivSelector.appendChild(update)
      update.style.fontFamily = 'Fuzzy Bubbles'
      theGameDivSelector.appendChild(currentScoreHeaders)
      theGameDivSelector.appendChild(currentScore)
      currentScoreHeaders.style.fontFamily = 'Fuzzy Bubbles'
      checkIfEnd()
})
})