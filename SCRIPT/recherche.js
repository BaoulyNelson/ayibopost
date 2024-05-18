document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchForm = document.getElementById('searchForm');
    const mySearch = document.getElementById('mySearch');
    const message = document.getElementById('message');
    const links = document.querySelectorAll('.lien');
    const contentItems = document.querySelectorAll('.content');
    const sidebar = document.querySelector('.sidebar');
    let foundLinks = 0;

    // Fonction pour afficher ou masquer le formulaire de recherche
    searchIcon.addEventListener('click', function() {
        // Afficher le panneau lorsque l'icône de recherche est cliquée
        sidebar.classList.add('show');

        if (searchForm.style.display === 'block') {
            searchForm.style.display = 'none';
        } else {
            searchForm.style.display = 'block';
            mySearch.focus(); // Activer le focus sur le champ de saisie
        }
    });

    // Fonction pour filtrer les liens en fonction de la recherche
    function filterLinks(searchText) {
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
    }

    mySearch.addEventListener('input', function() {
        filterLinks(mySearch.value.trim().toLowerCase());
    });

    // Afficher le contenu associé au lien sélectionné
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const contentId = link.getAttribute('data-content-id');
            // Masquer tous les contenus sauf celui associé au lien sélectionné
            contentItems.forEach(function(content) {
                if (content.id === contentId) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
            // Masquer le sidebar
            sidebar.classList.remove('show');
        });
    });

    // Soumettre le formulaire pour afficher le contenu associé au premier lien filtré
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = mySearch.value.trim().toLowerCase();
        filterLinks(searchTerm);

        // Afficher le contenu associé au premier lien filtré
        const firstVisibleLink = document.querySelector('.lien:not([style="display: none;"])');
        if (firstVisibleLink) {
            const contentId = firstVisibleLink.getAttribute('data-content-id');
            contentItems.forEach(function(content) {
                if (content.id === contentId) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
            // Masquer le sidebar
            sidebar.classList.remove('show');
        }
    });

    // Au chargement initial de la page, afficher le contenu associé au premier lien visible
    const firstVisibleLink = document.querySelector('.lien:not([style="display: none;"])');
    if (firstVisibleLink) {
        const contentId = firstVisibleLink.getAttribute('data-content-id');
        contentItems.forEach(function(content) {
            if (content.id === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    }
});
