let delay = 1000;
let countDown = function () {
    let time = document.getElementById("timer");
    if (time.textContent === "0") {
        alert("You have won the contest!");
    } else {
        time.textContent -= 1;
    }
    
}
setInterval(countDown, delay);
