document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");

// Массив с названиями файлов из папки images
    const slides = document.querySelector('.slide');

    const images = [
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
        'images/5.jpg',
        // добавь сюда остальные файлы
    ];

    let currentIndex = -1; // текущее изображение

    function changeBackground() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * images.length);
        } while (newIndex === currentIndex);

        currentIndex = newIndex;
        slides.style.backgroundImage = `url(${images[currentIndex]})`;
    }

// сразу показываем первое изображение
    changeBackground();

// каждые 3 секунды меняем картинку
    setInterval(changeBackground, 4500);

// для задания текущего года в футере
    document.getElementById('current-year').textContent = new Date().getFullYear();

    headers.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            header.classList.toggle("active");
            content.classList.toggle("open");
        });
    });

});
