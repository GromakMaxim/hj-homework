let request = new XMLHttpRequest();
request.open("get", "https://netology-slow-rest.herokuapp.com/poll.php");
request.send();

request.onreadystatechange = function () {
    if (request.readyState === 4) {
        createQuestionnaire(request.responseText);
        getAnswerFromUser();
    }
}

function createQuestionnaire(rawResponse) {
    let jsonObj = JSON.parse(rawResponse);

    let question = document.createElement("div")
    question.className = "poll__title";
    question.id = "poll__title";
    question.textContent = jsonObj.data.title;

    let answers = document.createElement("div");
    answers.classList.add("poll__answers");
    answers.classList.add("poll__answers_active");
    answers.id = "poll__answers";

    let options = jsonObj.data.answers;
    for (let item of options) {
        let btnElement = document.createElement("button");
        btnElement.className = "poll__answer";
        btnElement.textContent = item;
        answers.appendChild(btnElement);
    }

    let card = document.querySelector(".content .card .poll");
    card.appendChild(question);
    card.appendChild(answers);
}

function getAnswerFromUser() {
    let answers = document.getElementsByClassName("poll__answer");
    for (let item of answers) {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Selected option: " + item.textContent + "\n Thank you for your vote!");
        })
    }
}