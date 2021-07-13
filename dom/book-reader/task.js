//UI buttons
let fontButtons = document.getElementsByClassName("font-size");
let fontColorButtons = document.getElementsByClassName("book__control_color").item(0).children;
let bgColorButtons = document.getElementsByClassName("book__control_background").item(0).children;

//managing parameters
let book = document.getElementById("book");
let parameters = { fontSize: "", fontColor: "", bgColor: "" };

//font size
for (let btn of fontButtons) {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        switchActiveIcon(btn, "font-size_active", fontButtons);
        if (btn.dataset.size === "small") changeParameter("book_fs-small");
        else if (btn.dataset.size === "big") changeParameter("book_fs-big");
        else changeParameter("book_fs-normal");
    });
}

//font-color
for (let btn of fontColorButtons) {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        switchActiveIcon(btn, "color_active", fontColorButtons);
        if (btn.dataset.textColor === "black") changeParameter("book_color-black");
        else if (btn.dataset.textColor === "gray") changeParameter("book_color-gray");
        else if (btn.dataset.textColor === "whitesmoke") changeParameter("book_color-whitesmoke");
    })
}

//bg
for (let btn of bgColorButtons) {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        switchActiveIcon(btn, "color_active", bgColorButtons);
        if (btn.dataset.bgColor === "black") changeParameter("book_bg-black");
        else if (btn.dataset.bgColor === "gray") changeParameter("book_bg-gray");
        else if (btn.dataset.bgColor === "white") changeParameter("book_bg-white");
    })
}


function deactivate(option, arr) {
    for (let btn of arr) {
        btn.classList.remove(option);
    }
}

function switchActiveIcon(btn, option, arr) {
    deactivate(option, arr);
    btn.classList.add(option);
}

function changeParameter(option) {
    if (option.indexOf("book_fs-normal") !== -1) {
        book.classList.remove("book_fs-small");
        book.classList.remove("book_fs-big");
    }
    if (option.indexOf("_fs") !== -1) parameters.fontSize = option;
    if (option.indexOf("_color") !== -1) parameters.fontColor = option;
    if (option.indexOf("_bg") !== -1) parameters.bgColor = option;

    book.className = "book";
    if (parameters.fontColor != "") book.classList.add(parameters.fontColor);
    if (parameters.fontSize != "") book.classList.add(parameters.fontSize);
    if (parameters.bgColor != "") book.classList.add(parameters.bgColor);
}