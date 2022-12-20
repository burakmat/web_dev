const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const res = document.querySelector("#reset");
const p1 = document.querySelector("#p1Score");
const p2 = document.querySelector("#p2Score");
let finishScore = parseInt(document.querySelector("#finish").value);
const finish = document.querySelector("#finish");
let p1Score = 0;
let p2Score = 0;


btn1.addEventListener('click', () => {
    if (p2Score !== finishScore && p1Score !== finishScore) {
        p1Score += 1;
        displayScore();
    }
})

btn2.addEventListener('click', () => {
    if (p2Score !== finishScore && p1Score !== finishScore) {
        p2Score += 1;
        displayScore();
    }
})

res.addEventListener('click', reset)

finish.addEventListener('change', () => {
    reset();
    finishScore = parseInt(document.querySelector("#finish").value);
})

function reset() {
    p1Score = 0;
    p2Score = 0;
    p2.classList.remove("winner", "loser")
    p1.classList.remove("winner", "loser")
    displayScore();
}

function displayScore() {
    p1.innerText = p1Score;
    p2.innerText = p2Score;
    if (finishScore === p1Score) {
        p2.classList.add("loser");
        p1.classList.add("winner");
    }
    else if (finishScore === p2Score) {
        p2.classList.add("winner");
        p1.classList.add("loser");
    }
}