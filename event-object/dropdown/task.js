let label = document.getElementsByClassName("dropdown__value").item(0);
let menu = document.getElementsByClassName("dropdown__list").item(0);
let menuItems = document.getElementsByClassName("dropdown__link");

label.addEventListener("click", function (event) {
    event.preventDefault();
    menu.classList.add("dropdown__list_active");
});

for (let item of menuItems) {
    item.addEventListener("click", function (event) {
        event.preventDefault();
        let txt = item.textContent.replace(" ", "");
        label.textContent = txt;
        menu.classList.remove("dropdown__list_active");
    })
}