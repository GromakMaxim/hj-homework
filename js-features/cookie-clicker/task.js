let clickCounter = document.getElementById("clicker__counter");
let cookiePicture = document.getElementById("cookie");
let clickSpeed = document.getElementById("click_per_sec");

let firstClick = new Date();

cookiePicture.onclick = function () {
    let secondClick = new Date();
    let timeBetweenClicks = (secondClick - firstClick) / 1000;
    let clickPerSecond = 1 / timeBetweenClicks;

    firstClick = secondClick;
    clickSpeed.textContent = Math.ceil(clickPerSecond * 100) / 100;

    clickCounter.textContent = ++clickCounter.textContent;
    if (cookiePicture.width == 200) {
        cookiePicture.width = 250;
    } else if (cookiePicture.width == 250) {
        cookiePicture.width = 200;
    }
}
