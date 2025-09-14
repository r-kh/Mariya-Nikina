// Массив с названиями файлов из папки images
const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    // добавь сюда остальные файлы
];

const slideshow = document.querySelector('.slideshow');

let currentIndex = -1; // текущее изображение

function changeBackground() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * images.length);
    } while (newIndex === currentIndex); // пока не будет отличаться от текущего

    currentIndex = newIndex;
    slideshow.style.backgroundImage = `url(${images[currentIndex]})`;
}

// сразу показываем первое изображение
changeBackground();

// каждые 3 секунды меняем картинку
setInterval(changeBackground, 4500);
