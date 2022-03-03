let player = 0,
    computer = 0,
    draw = 0

const computerPlay = () => {
    const arr = ['rock', 'paper', 'scissors']
    return arr[Math.floor(Math.random() * arr.length)]
}

const playerPlay = prompt('Please enter Rock, Paper or Scissors!').toLowerCase();

const playRound = (computerPlay, playerPlay) => {
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

const game = () => {
    let round = 0

    while (round !== 5) {
        round++
        console.log(`Round: ${round} ${playRound(computerPlay(), playerPlay)}`)
    }

    if (player > computer) {
        console.log('Player wins!')
    } else if (player < computer) {
        console.log('Computer wins!')
    } else {
        console.log('After 5 rounds DRAW!')
    }
}

game()