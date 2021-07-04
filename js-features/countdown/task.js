let delay = 1000;

let updateClock = function () {
    let time = document.getElementById("timer");
    if (time.textContent === "00:00:00") {
        cross_download("https://www.yourfreedom.ru/custom-content/uploads/0563266e58d8b270300cb92e7479558f.jpg", "Win.jpg");
        document.getElementById("status").textContent = "You are the winner!";
    }
    time.textContent = countDown(time.textContent);
}
setInterval(updateClock, delay);

function countDown(str) {
    let hours = parseInt(str.split(":")[0]);
    let minutes = parseInt(str.split(":")[1]);
    let seconds = parseInt(str.split(":")[2]);

    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            if (hours > 0) {
                hours--;
                minutes = 59
                seconds = 59;
            }
        }
    }
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return hours + ":" + minutes + ":" + seconds;
}



function cross_download(url, fileName) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    var __fileName = fileName;
    req.onload = function (event) {
        var blob = req.response;
        var contentType = req.getResponseHeader("content-type");
        if (window.navigator.msSaveOrOpenBlob) {
            // Internet Explorer
            window.navigator.msSaveOrOpenBlob(new Blob([blob], { type: contentType }), fileName);
        } else {
            var link = document.createElement('a');
            document.body.appendChild(link);
            link.download = __fileName;
            link.href = window.URL.createObjectURL(blob);
            link.click();
            document.body.removeChild(link); //remove the link when done
        }
    };
    req.send();
}