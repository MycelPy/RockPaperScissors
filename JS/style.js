let player = 0,
    computer = 0,
    draw = 0

const buttons = document.querySelectorAll('button')
const playerko = document.querySelector('.player')
const computerko = document.querySelector('.computer')
const drawko = document.querySelector('.draw')
const tab = document.querySelector('.tab')
const container = document.querySelector('.container')
const blob = document.querySelector('.blob')
const tada = document.querySelector('.tada')
const ps = document.querySelectorAll('p')


buttons.forEach(button => button.addEventListener('click', (e) => {

    blob.play()

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing', 'text');
    }

    button.classList.add('playing')

    const playerPlay = e.target.classList[0]

    const computerPlay = () => {
        const arr = ['rock', 'paper', 'scissors']
        return arr[Math.floor(Math.random() * arr.length)]
    }

    let pc = computerPlay()

    if (pc === playerPlay) {
        draw += 1
        drawko.classList.add('text');
        drawko.textContent = `${draw}`
        tab.innerHTML = `Draw!<br>Player: ${playerPlay} Computer: ${pc}`
    } else
    if (pc === 'rock' && playerPlay === 'paper' || pc === 'paper' && playerPlay === 'scissors' || pc === 'scissors' && playerPlay === 'rock') {
        player += 1
        playerko.classList.add('text');
        playerko.textContent = `${player}`
        tab.innerHTML = `Player wins round!<br>Player: ${playerPlay} Computer: ${pc}`
    } else {
        computer += 1
        computerko.classList.add('text')
        computerko.textContent = `${computer}`
        tab.innerHTML = `Computer wins round!<br>Player: ${playerPlay} Computer: ${pc}`
    }

    function restart() {
        tada.play()
        buttons.forEach(button => button.remove())
        const restart = document.createElement('button')
        restart.innerText = 'Do you want to restart?'
        container.appendChild(restart)
        restart.addEventListener('click', () => {
            window.location.reload(true)
        })
    }

    buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
    ps.forEach(p => p.addEventListener('transitionend', removeTransition))

    if (player === 5) {
        tab.textContent = `Player Wins Game!!!`
        restart()
    } else if (computer === 5) {
        tab.textContent = `Computer Wins Game!!!`
        restart()
    }

}))