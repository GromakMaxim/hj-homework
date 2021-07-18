let links = document.getElementsByClassName("has-tooltip");

for (let link of links) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        showTip(link);
    })
}

function showTip(link) {
    let txt = link.title;
    if (link.getElementsByClassName("tooltip").item(0) == null) {
        let pos = link.getBoundingClientRect();
        let el = document.createElement("div");
        console.log(pos)
        el.classList.add("tooltip");
        el.classList.add("tooltip_active");
        el.textContent = txt;

        el.style.left = pos.left + "px";
        el.style.top = (pos.top + 20) + "px";
        link.insertAdjacentElement("beforeend", el);
    } else {
        link.getElementsByClassName("tooltip").item(0).remove();
    }
}
