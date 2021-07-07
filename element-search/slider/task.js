let prevImg = document.getElementsByClassName("slider__arrow_prev").item(0);
let nextImg = document.getElementsByClassName("slider__arrow_next").item(0);
let pictures = document.getElementsByClassName("slider__item");
let dots = document.getElementsByClassName("slider__dot");

let imgNumber = pictures.length - 1;

//its our default first image
let currentImage = 0;
dots.item(currentImage).classList.add("slider__dot_active"); 

nextImg.addEventListener("click", stepForward);
prevImg.addEventListener("click", stepBackward);

function stepForward() {
    clear();
    currentImage++;
    changeImg();
};

function stepBackward() {
    clear();
    currentImage--;
    changeImg();
};

function changeImg() {
    if (currentImage > imgNumber) currentImage = 0;
    if (currentImage < 0) currentImage = imgNumber;
    pictures.item(currentImage).classList.add("slider__item_active");
    dots.item(currentImage).classList.add("slider__dot_active");
}


for (let i = 0; i <= dots.length - 1; i++) {
    dots[i].addEventListener("click", function () {
        clear();
        currentImage = i;
        changeImg();
    });
};

function clear() {
    for (let picture of pictures) {
        picture.classList.remove("slider__item_active");
    };
    for (let dot of dots) {
        dot.classList.remove("slider__dot_active");
    };
};