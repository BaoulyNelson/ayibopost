// Sélection du bouton de soumission du formulaire
const submitButton = document.querySelector('.search-form button');

// Ajout d'un écouteur d'événements au clic sur le bouton de soumission
submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le formulaire de se soumettre et de recharger la page

    const filter = searchInput.value.trim().toUpperCase(); // Récupère la valeur saisie dans le champ de recherche
    const links = document.querySelectorAll('.sidebar ul li'); // Sélectionne tous les liens dans le sidebar

    // Parcourt tous les liens pour trouver celui qui correspond à la saisie de l'utilisateur
    links.forEach(link => {
        if (link.innerText.toUpperCase().includes(filter)) {
            const targetId = link.getAttribute('data-target'); // Récupère l'identifiant de la cible du lien
            const targetContent = document.getElementById(targetId); // Sélectionne le contenu associé à l'identifiant

            // Affiche le contenu associé s'il existe
            if (targetContent) {
                targetContent.style.display = 'block';
                sidebar.classList.add('show');
            }
        }
    });
});

// Sélection du bouton de recherche
const searchButton = document.querySelector('.search-form button');

// Ajout d'un écouteur d'événements au clic sur le bouton de recherche
searchButton.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le formulaire de se soumettre et de recharger la page

    console.log('Le bouton de recherche a été cliqué.'); // Affiche un message dans la console du navigateur pour déboguer

    // Ajoutez ici le code pour traiter la recherche et afficher le contenu associé au lien
});
