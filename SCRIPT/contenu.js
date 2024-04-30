document.addEventListener('DOMContentLoaded', function() {
    // Ajoutez une variable pour suivre l'état du sidebar
    let sidebarOpen = false;

    // Sélectionner le toggle du sidebar
    const toggleIcon = document.querySelector('.toggle-icon');
    // Sélectionner le sidebar
    const sidebar = document.querySelector('.sidebar');

    // Ajouter un écouteur d'événements pour le clic sur le toggle
    toggleIcon.addEventListener('click', function() {
        // Inverser l'état du sidebar
        sidebarOpen = !sidebarOpen;
        
        // Vérifier l'état du sidebar et agir en conséquence
        if (sidebarOpen) {
            // Afficher le sidebar
            sidebar.style.display = 'block';
            // Mettre à jour l'icône du toggle
            toggleIcon.textContent = '▲'; // Remplacez par l'icône appropriée
        } else {
            // Cacher le sidebar
            sidebar.style.display = 'none';
            // Mettre à jour l'icône du toggle
            toggleIcon.textContent = '▼'; // Remplacez par l'icône appropriée
        }
    });

    // Sélectionner tous les liens à l'intérieur du sidebar
    const links = document.querySelectorAll('.lien');

    // Pour chaque lien, ajouter un écouteur d'événements pour le clic
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Fermer le sidebar lorsque vous cliquez sur un lien
            sidebar.style.display = 'none';
            // Mettre à jour l'état du sidebar
            sidebarOpen = false;
            // Réinitialiser l'icône du toggle
            toggleIcon.textContent = '▼'; // Remplacez par l'icône appropriée
        });
    });
});
