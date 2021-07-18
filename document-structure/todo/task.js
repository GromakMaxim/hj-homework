let addButton = document.getElementById("tasks__add");
let userInput = document.getElementsByClassName("tasks__input").item(0);
let taskList = document.getElementById("tasks__list");

addButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (userInput.value != "") {
        remove(add(userInput.value));
        userInput.value = "";
    }
});


function add(txt) {
    let taskElement = document.createElement("div");
    taskElement.className = "task";
    let taskTitle = document.createElement("div");
    taskTitle.className = "task__title";
    taskTitle.textContent = txt;
    let deleteBtn = document.createElement("a");
    deleteBtn.href = "#"
    deleteBtn.className = "task__remove";
    deleteBtn.textContent = "x";

    taskElement.insertAdjacentElement("afterbegin", taskTitle);
    taskElement.insertAdjacentElement("beforeend", deleteBtn);
    taskList.insertAdjacentElement("afterbegin", taskElement);

    return taskElement;
}

function remove(el) {
    el.addEventListener("click", function (event) {
        event.preventDefault();
        el.remove();
    });
}