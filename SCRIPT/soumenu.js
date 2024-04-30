document.addEventListener("DOMContentLoaded", function() {
    const parentItems = document.querySelectorAll('.parent');

    // Ajouter un écouteur d'événements à chaque élément parent
    parentItems.forEach(function(parentItem) {
        const subMenu = parentItem.querySelector('.sub-menu');
        const toggleIcon = parentItem.querySelector('.toggle-icon');

        parentItem.addEventListener('click', function(event) {
            event.preventDefault(); // Empêcher le comportement par défaut du lien

            // Basculer l'affichage de la sous-liste
            if (subMenu.style.display === 'block') {
                subMenu.style.display = 'none';
                toggleIcon.textContent = '▼'; // Changer l'icône en flèche vers le bas
            } else {
                subMenu.style.display = 'block';
                toggleIcon.textContent = '▲'; // Changer l'icône en flèche vers le haut
            }
        });
    });
});
