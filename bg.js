const body = document.querySelector('body');

function showImg(number) {
    const img = new Image();
    img.src = `${number}.jpg`;
    img.classList.add('bgImage');
    body.appendChild(img);
}

function getRandom() {
    const num = Math.floor(Math.random() * 6) + 1;
    return num;
}

function init() {
    const randomNum = getRandom();
    showImg(randomNum);
}

init();