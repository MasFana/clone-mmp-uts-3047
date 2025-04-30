document.addEventListener('DOMContentLoaded', function () {
    navbar();
    populateCourses();
});

function populateCourses() {
    const container = document.querySelector('.course-container');
    const course = document.querySelector('.course-card');

    for (let i = 0; i < 10; i++) {
        const courseClone = course.cloneNode(true);
        container.appendChild(courseClone);
    }
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