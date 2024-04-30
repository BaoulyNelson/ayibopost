document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.lien');
    const sidebar = document.querySelector('.sidebar');

    // Ajouter un écouteur d'événements à chaque lien du sidebar
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Empêcher le comportement de lien par défaut

            const contenuId = link.dataset.contenu; // Récupérer l'ID du contenu associé

            // Masquer tous les contenus précédents
            const tousContenus = document.querySelectorAll('.contenu');
            tousContenus.forEach(function(contenu) {
                contenu.style.display = 'none';
            });

            // Afficher le contenu associé
            const contenuElement = document.getElementById('contenu_' + contenuId);
            if (contenuElement) {
                contenuElement.style.display = 'block';
            }

            // Masquer le sidebar
            sidebar.classList.remove('show');
        });
    });
});
