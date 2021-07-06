let prevImg = document.getElementsByClassName("slider__arrow_prev").item(0);
let nextImg = document.getElementsByClassName("slider__arrow_next").item(0);
let pictures = document.getElementsByClassName("slider__item");

let imgNumber = pictures.length - 1;
let dots = document.getElementsByClassName("slider__dot");

dots.item(0).classList.add("slider__dot_active"); //its our default first image

nextImg.addEventListener("click", stepForward);
prevImg.addEventListener("click", stepBackward);

function stepForward() {
    for (let i = 0; i <= imgNumber; i++) {

        if (pictures.item(imgNumber).classList.contains("slider__item_active")) {
            pictures.item(imgNumber).classList.remove("slider__item_active");
            pictures.item(0).classList.add("slider__item_active");

            dots.item(imgNumber).classList.remove("slider__dot_active");
            dots.item(0).classList.add("slider__dot_active");
            break;
        };

        if (pictures.item(i).classList.contains("slider__item_active")) {
            pictures.item(i).classList.remove("slider__item_active");
            pictures.item(i + 1).classList.add("slider__item_active");

            dots.item(i).classList.remove("slider__dot_active");
            dots.item(i + 1).classList.add("slider__dot_active");
            break;
        };
    };
}

function stepBackward() {
    for (let i = 0; i <= imgNumber; i++) {

        if (pictures.item(0).classList.contains("slider__item_active")) {
            pictures.item(0).classList.remove("slider__item_active");
            pictures.item(imgNumber).classList.add("slider__item_active");

            dots.item(0).classList.remove("slider__dot_active");
            dots.item(imgNumber).classList.add("slider__dot_active");
            break;
        };

        if (pictures.item(i).classList.contains("slider__item_active")) {
            pictures.item(i).classList.remove("slider__item_active");
            pictures.item(i - 1).classList.add("slider__item_active");

            dots.item(i).classList.remove("slider__dot_active");
            dots.item(i - 1).classList.add("slider__dot_active");
            break;
        };
    };
};

for (let i = 0; i <= dots.length - 1; i++) {
    dots[i].addEventListener("click", function () {
        deselectDots();
        dots[i].classList.add("slider__dot_active");
        deselectPictures();
        pictures.item(i).classList.add("slider__item_active");
    });
};

function deselectPictures() {
    for (let pic of pictures) {
        pic.classList.remove("slider__item_active");
    }
}

for (let dot of dots) {
    dot.addEventListener("click", function () {
        deselectDots();
        dot.classList.add("slider__dot_active");
    });
};

function deselectDots() {
    for (let dot of dots) {
        dot.classList.remove("slider__dot_active");
    };
};