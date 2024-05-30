document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.querySelector('.toggle-sidebar-btn');
    var sidebar = document.querySelector('.sidebar-nav');

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });
});
