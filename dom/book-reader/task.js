let fontButtons = document.getElementsByClassName("font-size");
let book = document.getElementById("book");

for (let btn of fontButtons) {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        switchActiveIcon(btn);
        if (btn.dataset.size === "small") changeFont("book_fs-small");
        else if (btn.dataset.size === "big") changeFont("book_fs-big");
        else changeFont("");
    });
}

function deactivate() {
    for (let btn of fontButtons) {
        btn.classList.remove("font-size_active");
    }
}

function switchActiveIcon(btn) {
    deactivate();
    btn.classList.add("font-size_active");
}

function changeFont(option) {
    book.className = "";
    book.className = "book";
    if (option !== "") book.classList.toggle(option);
}