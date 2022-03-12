let player = 0,
    computer = 0,
    draw = 0

const buttons = document.querySelectorAll('button')
const playerko = document.querySelector('.player')
const computerko = document.querySelector('.computer')
const drawko = document.querySelector('.draw')
const tab = document.querySelector('.tab')

buttons.forEach(button => button.addEventListener('click', (e) => {
    const playerPlay = e.target.classList[0]

    const computerPlay = () => {
        const arr = ['rock', 'paper', 'scissors']
        return arr[Math.floor(Math.random() * arr.length)]
    }

    if (computerPlay() === playerPlay) {
        draw += 1
        drawko.textContent = `${draw}`
        tab.textContent = `Draw! Player: ${playerPlay} Computer: ${computerPlay()}`
    } else
    if (computerPlay() === 'rock' && playerPlay === 'paper' || computerPlay() === 'paper' && playerPlay === 'scissors' || computerPlay() === 'scissors' && playerPlay === 'rock') {
        player += 1
        playerko.textContent = `${player}`
        tab.textContent = `Player wins round! Player: ${playerPlay} Computer: ${computerPlay()}`
    } else {
        computer += 1
        computerko.textContent = `${computer}`
        tab.textContent = `Computer wins round! Player: ${playerPlay} Computer: ${computerPlay()}`
    }
}))