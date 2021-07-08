let tabs = document.getElementsByClassName("tab");
let contents = document.getElementsByClassName("tab__content");

for (let i = 0; i <= tabs.length - 1; i++) {
    tabs[i].addEventListener("click", function (event) {
        event.preventDefault();
        clear();
        add(i);
    })
}

function clear() {
    for (let tab of tabs) {
        tab.classList.remove("tab_active");
    };
    for (let content of contents) {
        content.classList.remove("tab__content_active");
    }
}

function add(index) {
    tabs[index].classList.add("tab_active");
    contents[index].classList.add("tab__content_active");
}