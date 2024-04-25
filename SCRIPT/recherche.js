// Sélection de l'icône de recherche et du formulaire
const searchIcon = document.getElementById('searchIcon');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('mySearch'); // Sélection du champ de recherche
const menuIcon = document.querySelector('.menu-icon'); // Sélection de l'icône de menu hamburger
const sidebar = document.getElementById('sidebar'); // Sélection du sidebar
const closeIcon = document.querySelector('.close-icon'); // Sélection de l'icône de fermeture du sidebar
const links = document.querySelectorAll('.sidebar ul li'); // Sélection des liens dans le sidebar
const message = document.getElementById('message'); // Sélection de l'élément pour afficher le message

// Ajout d'un écouteur d'événements au clic sur l'icône de recherche
searchIcon.addEventListener('click', () => {
    // Inversion de la visibilité du formulaire
    if (searchForm.style.display === 'none') {
        searchForm.style.display = 'block';
        searchInput.focus(); // Placer le curseur à l'intérieur du champ de recherche
    } else {
        searchForm.style.display = 'none';
    }
});

// Ajout d'un écouteur d'événements au clic sur l'icône de menu hamburger
menuIcon.addEventListener('click', () => {
    // Ajout de la classe 'show' pour afficher le sidebar
    sidebar.classList.add('show');
});

// Ajout d'un écouteur d'événements au clic sur l'icône de fermeture du sidebar
closeIcon.addEventListener('click', () => {
    // Suppression de la classe 'show' pour masquer le sidebar
    sidebar.classList.remove('show');
});

// Ajout d'un écouteur d'événements pour le champ de recherche pour filtrer les liens en temps réel
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.trim().toUpperCase(); // Convertit la saisie en majuscules et supprime les espaces avant et après
    let found = 0; // Initialise le compteur de résultats trouvés à 0

    links.forEach(link => {
        if (link.innerText.toUpperCase().indexOf(filter) > -1) {
            link.style.display = ''; // Affiche le lien s'il correspond au filtre
            found++; // Incrémente le compteur de résultats trouvés
        } else {
            link.style.display = 'none'; // Masque le lien s'il ne correspond pas au filtre
        }
    });

    // Affichage du message indiquant le nombre de liens trouvés
    if (filter !== '') {
        message.innerText = `${found} lien(s) trouvé(s)`;
    } else {
        message.innerText = ''; // Efface le message s'il n'y a pas de saisie dans le champ de recherche
    }
});