var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')
var playerchoice = document.getElementById('playerchoice')
var botChoice = document.getElementById('botChoice')
var compare
var results = document.getElementById('results')
var printUserScore = document.getElementById('printUserScore')
var printComputerScore = document.getElementById('printComputerScore')
var userChoice = ''
var computerChoice = ''
var computerOptions = ['rock', 'paper', 'scissors']
var userScore = 0
var computerScore = 0

rock.addEventListener('click', function() {
 userChoice = 'rock'
 playerChoice.innerHTML = "You chose: " + userChoice + "."
 computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)]
 botChoice.innerHTML = "Computer chose: " + computerChoice + "."
 compare()
})

paper.addEventListener('click', function() {
  userChoice = 'paper'
  playerChoice.innerHTML = "You chose: " + userChoice + "."
  computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)]
  botChoice.innerHTML = "Computer chose: " + computerChoice + "."
  compare()
 })

 scissors.addEventListener('click', function() {
  userChoice = 'scissors'
  playerChoice.innerHTML = "You chose: " + userChoice + "."
  computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)]
  botChoice.innerHTML = "Computer chose: " + computerChoice + "."
  compare()
 })

 function compare() {
  if (userChoice === computerChoice) {
    outcomeTie()
 } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    outcomeWin()
 } else if (userChoice === 'rock' && computerChoice === 'paper') {
    outcomeLose()
 } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    outcomeLose()
 } else if (userChoice === 'paper' && computerChoice === 'rock') {
    outcomeWin()
 } else if (userChoice === 'scissors' && computerChoice === 'rock') {
   outcomeLose()
 } else if (userChoice === 'scissors' && computerChoice === 'paper') {
   outcomeWin()
 }
}

function outcomeTie() {
  results.innerHTML = "You tied!"
}

function outcomeLose() {
  computerScore++
  results.innerHTML = "You lost!"
  printComputerScore.innerHTML = "Computer Score: " + computerScore
  printUserScore.innerHTML = "Your Score: " + userScore
}

function outcomeWin() {
  userScore++
  results.innerHTML = "You win!"
  printUserScore.innerHTML = "Your Score: " + userScore
  printComputerScore.innerHTML = "Computer Score: " + computerScore
}