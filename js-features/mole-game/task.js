const holes = document.getElementsByClassName("hole");
const score = document.getElementById("dead");
const misses = document.getElementById("lost");


for (let hole of holes) {
    hole.addEventListener("click", function () {
        gameplay(hole);
        checkScore();
    })
}

function checkScore() {
    if (misses.textContent == 5) alert("You lose!");
    if (score.textContent == 10) alert("You win!");
    if (misses.textContent == 5 || score.textContent == 10) resetScore();
}

function resetScore() {
    score.textContent = 0;
    misses.textContent = 0;
}

function gameplay(hole) {
    if (hole.classList.contains("hole_has-mole")) {
        score.textContent = ++score.textContent;
    } else {
        misses.textContent = ++misses.textContent;
    }
}