// document.addEventListener("DOMContentLoaded", () => {
//     const headers = document.querySelectorAll(".accordion-header");
//
// // Массив с названиями файлов из папки images
//     const slides = document.querySelector('.slide');
//
//     const images = [
//         'images/1.jpg',
//         'images/2.jpg',
//         'images/3.jpg',
//         'images/4.jpg',
//         'images/5.jpg',
//         // добавь сюда остальные файлы
//     ];
//
//     let currentIndex = -1; // текущее изображение
//
//     function changeBackground() {
//         let newIndex;
//         do {
//             newIndex = Math.floor(Math.random() * images.length);
//         } while (newIndex === currentIndex);
//
//         currentIndex = newIndex;
//         slides.style.backgroundImage = `url(${images[currentIndex]})`;
//     }
//
// // сразу показываем первое изображение
//     changeBackground();
//
// // каждые 3 секунды меняем картинку
//     setInterval(changeBackground, 4500);
//
// // для задания текущего года в футере
//     document.getElementById('current-year').textContent = new Date().getFullYear();
//
//     headers.forEach(header => {
//         header.addEventListener("click", () => {
//             const content = header.nextElementSibling;
//             header.classList.toggle("active");
//             content.classList.toggle("open");
//         });
//     });
//
// });

document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");
    const slides = document.querySelector('.slide');
    const prevBtn = document.querySelector('.nav.prev');
    const nextBtn = document.querySelector('.nav.next');
    const dotsContainer = document.querySelector('.dots');

    const images = [
        // 'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
        'images/5.jpg',
        'images/6.jpg',
        'images/7.jpg',
        'images/8.jpg',
        'images/9.jpg',
        'images/10.jpg',
        'images/11.jpg',
        'images/12.jpg',
        'images/13.jpg',
        'images/14.jpg',
        'images/15.jpg',
        'images/16.jpg',
        'images/17.jpg',
        'images/18.jpg',
        // 'images/19.jpg',
        'images/20.jpg',
        'images/21.jpg',
        'images/22.jpg',
        'images/23.jpg',
    ];

    // --- Предзагрузка изображений ---
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    let currentIndex = 0;
    let autoChange;
    let timeoutRestart;

    // --- Генерация точек ---
    images.forEach((_, index) => {
        const dot = document.createElement('button');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoChange();
        });
        dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll('button');

    // --- Функция смены картинки ---
    function showSlide(index) {
        currentIndex = (index + images.length) % images.length;
        slides.style.backgroundImage = `url(${images[currentIndex]})`;

        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    // --- Рандомная смена ---
    function changeBackground() {

        let newIndex = (currentIndex + 1) % images.length;
        // ниже вариант рандомного перебора картинок
        // let newIndex;
        // do {
        //     newIndex = Math.floor(Math.random() * images.length);
        // } while (newIndex === currentIndex);
        showSlide(newIndex);
    }

    // --- Навигация стрелками ---
    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
        resetAutoChange();
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
        resetAutoChange();
    });

    // --- Автоматический запуск ---
    function startAutoChange() {
        autoChange = setInterval(changeBackground, 4500);
    }

    function stopAutoChange() {
        clearInterval(autoChange);
    }

    function resetAutoChange() {
        stopAutoChange();
        clearTimeout(timeoutRestart);
        timeoutRestart = setTimeout(startAutoChange, 5000);
    }

    // --- Инициализация ---
    showSlide(0);
    startAutoChange();

    // футер
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // аккордеон
    headers.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            header.classList.toggle("active");
            content.classList.toggle("open");
        });
    });
});