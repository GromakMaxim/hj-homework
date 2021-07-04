let clickCounter = document.getElementById("clicker__counter");
let cookiePicture = document.getElementById("cookie");

cookiePicture.onclick = function () {
    clickCounter.textContent = ++clickCounter.textContent;
    console.log(cookiePicture.width)
    if (cookiePicture.width == 200) {
        cookiePicture.width = 250;
    } else if (cookiePicture.width == 250) {
        cookiePicture.width = 200;
    }
}