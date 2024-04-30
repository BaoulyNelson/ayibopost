// Pour permettre la fermeture du panneau latéral en cliquant sur une icône de fermeture

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const sidebar = document.querySelector('.sidebar');

    menuIcon.addEventListener('click', function() {
        sidebar.classList.add('show');
    });

    closeIcon.addEventListener('click', function() {
        sidebar.classList.remove('show');
    });
});
