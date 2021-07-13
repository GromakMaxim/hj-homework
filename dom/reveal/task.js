let ads = document.getElementsByClassName("reveal");
let iSeeYou = window.innerHeight;

window.addEventListener('scroll', show);

function show() {
    for (let advert of ads) {
        let top = advert.getBoundingClientRect().top;
        if (top < iSeeYou && top > 0) {
            advert.classList.add("reveal_active");
        } else {
            advert.classList.remove("reveal_active");
        }
    }
}