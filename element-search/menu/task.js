let menu = document.querySelectorAll(".menu_sub");

for (let item of menu) {
    let openableMenu = item.parentElement.querySelector(".menu__link");

    openableMenu.addEventListener("click", function (event) {
        closeAllMenus();
        event.preventDefault();
        item.classList.add("menu_active");
    });
}

function closeAllMenus() {
    for (let item of menu) {
        item.classList.remove("menu_active");
    };
};