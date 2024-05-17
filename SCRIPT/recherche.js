document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchForm = document.getElementById('searchForm');
    const mySearch = document.getElementById('mySearch');
    const message = document.getElementById('message');
    const links = document.querySelectorAll('.lien');
    let foundLinks = 0;

    // Fonction pour afficher ou masquer le formulaire de recherche
    searchIcon.addEventListener('click', function() {
        // Afficher le panneau lorsque l'icône de recherche est cliquée
        document.querySelector('.sidebar').classList.add('show');

        if (searchForm.style.display === 'block') {
            searchForm.style.display = 'none';
        } else {
            searchForm.style.display = 'block';
            mySearch.focus(); // Activer le focus sur le champ de saisie
        }
    });

    // Fonction pour filtrer les liens en fonction de la recherche
    mySearch.addEventListener('input', function() {
        const searchText = mySearch.value.trim().toLowerCase();
        foundLinks = 0;

        if (searchText === '') {
            // Réinitialiser l'affichage des liens si la recherche est vide
            links.forEach(function(link) {
                link.parentElement.style.display = 'block';
            });
            message.textContent = ''; // Cacher le message
            return; // Sortir de la fonction
        }

        links.forEach(function(link) {
            const linkText = link.textContent.toLowerCase();
            if (linkText.includes(searchText)) {
                link.parentElement.style.display = 'block';
                foundLinks++;
            } else {
                link.parentElement.style.display = 'none';
            }
        });

        // Afficher le nombre de liens trouvés
        message.textContent = foundLinks + " lien(s) trouvé(s)";
    });
});
