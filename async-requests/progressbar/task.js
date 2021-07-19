let submit = document.getElementById("send");
let progressbar = document.getElementById("progress");

submit.addEventListener("click", function (event) {
    event.preventDefault();

    let form = new FormData(document.getElementById("form"));
    let request = new XMLHttpRequest();
    request.open("post", "https://netology-slow-rest.herokuapp.com/upload.php");

    request.upload.onprogress = function (event) {
        let percent = event.loaded / event.total;
        progressbar.setAttribute("value", percent);
    }
    request.send(form);
})