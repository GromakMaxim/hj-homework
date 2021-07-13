let delay = 1000;
let ads = document.getElementsByClassName("rotator__case");
let colors = ["black", "silver", "gray", "white", "maroon",
    "red", "purple", "fuchsia", "green", "lime",
    "olive", "yellow", "navy", "blue", "teal aqua"];

function doMagic() {
    let len = ads.length - 1;
    for (let i = 0; i <= len; i++) {
        let isActivated = ads[i].classList.contains("rotator__case_active");
        if (isActivated && i == len) {
            changeActiveElement(ads[i], ads[0]);
            fillWithRandomColor(ads[0]);
            break;
        }

        if (isActivated && i < len) {
            changeActiveElement(ads[i], ads[i + 1]);
            fillWithRandomColor(ads[i+1]);
            break;
        }
    }
}

function changeActiveElement(elRemove, elAdd) {
    elRemove.classList.remove("rotator__case_active");
    elAdd.classList.add("rotator__case_active");
}

function fillWithRandomColor(el) {
    let rnd = Math.floor(Math.random() * colors.length);
    el.style.color = colors[rnd];
}

setInterval(doMagic, delay);