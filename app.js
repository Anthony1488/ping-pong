
//Elements////////////////////////////////////////////////////////////
const resetBtn = document.querySelector("#reset")
const select = document.querySelector("#gameType")
const p1 = {
    score: document.querySelector('#player1score'),
    btn: document.querySelector("#addPlayer1")
}
const p2 = {
    score: document.querySelector('#player2score'),
    btn: document.querySelector("#addPlayer2")
}

/////////////////////////////////////////////////////////////////////
function updateScores(player, opponent) {
     player.score.innerText = parseInt(player.score.innerText) + 1
    if (parseInt(player.score.innerText) >= parseInt(select.value)){ 
        player.score.style.color = 'green'
        opponent.score.style.color = 'red'
        player.btn.setAttribute('disabled', 'disabled')
        opponent.btn.setAttribute('disabled', 'disabled')
    }
}

//Add Score///////////////////////////////////////////////////////////
p1.btn.addEventListener('click', () => updateScores(p1, p2))
p2.btn.addEventListener('click', () => updateScores(p2, p1))

//Reset Button////////////////////////////////////////////////////////
resetBtn.addEventListener('click', () => {
    for (let p of [p1, p2]) {
        p.score.innerText = "0"
        p.score.style.color = 'black'
        p.btn.removeAttribute('disabled')
    }
})
