let holes = document.getElementsByClassName("hole");
let score = document.getElementById("dead");
let misses = document.getElementById("lost");


for (let hole of holes) {
    hole.addEventListener("click", function () {
        gameplay(hole);
        checkScore();
    })
}

function checkScore() {
    if (misses.textContent == 5) alert("You lose!");
    if (score.textContent == 10) alert("You win!");
}

function gameplay(hole) {
    if (hole.classList.contains("hole_has-mole")) {
        score.textContent = ++score.textContent;
    } else {
        misses.textContent = ++misses.textContent;
    }
}