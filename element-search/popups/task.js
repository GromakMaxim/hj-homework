const doWellWindow = document.getElementById("modal_main");
const wellDoneBtn = doWellWindow.getElementsByTagName("a").item(0);

const closeButtons = document.getElementsByClassName("modal__close");

const wellDoneWindow = document.getElementById("modal_success");

wellDoneBtn.addEventListener("click", function () {
    doWellWindow.classList.remove("modal_active");
    wellDoneWindow.classList.add("modal_active");
});


for (let btn of closeButtons) {
    btn.addEventListener("click", function () {
        btn.parentElement.parentElement.classList.remove("modal_active");
    });
};

doWellWindow.classList.add("modal_active");

