let player = 0,
    computer = 0,
    draw = 0


const buttons = document.querySelectorAll('button')

buttons.forEach(button => button.addEventListener('click', ))

const playRound = () => {

    const computerPlay = () => {
        const arr = ['rock', 'paper', 'scissors']
        return arr[Math.floor(Math.random() * arr.length)]
    }

    const playerPlay = prompt('Please enter Rock, Paper or Scissors!').toLowerCase();

    if (computerPlay === playerPlay) {
        draw += 1
        return `Draw! Player: ${playerPlay} Computer: ${computerPlay}`
    } else if (computerPlay === 'rock' && playerPlay === 'paper' || computerPlay === 'paper' && playerPlay === 'scissors' || computerPlay === 'scissors' && playerPlay === 'rock') {
        player += 1
        return `Player wins round! Player: ${playerPlay} Computer: ${computerPlay}`
    } else {
        computer += 1
        return `Computer wins round! Player: ${playerPlay} Computer: ${computerPlay}`
    }
}