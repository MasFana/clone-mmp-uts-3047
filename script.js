document.addEventListener('DOMContentLoaded', function () {
    navbar()
    initSlider()
});

function initSlider() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const slideCount = slides.length;
    let currentSlide = 0;
    let slideInterval;

    // init indicator container
    const indicatorsContainer = document.createElement('div');
    indicatorsContainer.classList.add('slider-indicators');
    slider.appendChild(indicatorsContainer);

    const indicators = []
    // create indicators
    for (let i = 0; i < slideCount; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('slider-indicator');
        if (i === 0) indicator.classList.add('active');

        indicator.addEventListener('click', () => {
            currentSlide = i;
            updateSlider();
        });

        indicatorsContainer.appendChild(indicator);
        indicators.push(indicator);

    }

    // init positions
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * index}%)`;
    });
    // move next
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }
    // update slider
    function updateSlider() {

        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
        });
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    // auto-sliding
    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000); // 5dtk
    }
    // !auto-sliding
    function stopSlider() {
        clearInterval(slideInterval);
    }
    // init slider
    startSlider();

    // puase on hover
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);

    // nav buttons
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '❯';
    nextBtn.classList.add('slider-btn', 'next-btn');
    nextBtn.addEventListener('click', nextSlide);

    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '❮';
    prevBtn.classList.add('slider-btn', 'prev-btn');
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
    });

    slider.appendChild(prevBtn);
    slider.appendChild(nextBtn);
}

function navbar() {
    const menuButton = document.querySelector('.menu-button');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    menuButton.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function () {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Close sidebar ketika klik di luar sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar-links a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
}