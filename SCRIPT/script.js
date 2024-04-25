// JavaScript pour le menu hamburger
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.getElementById('sidebar');
const searchIcon = document.querySelector('.search-icon');
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form input');
const closeIcon = document.querySelector('.close-icon');

menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

searchIcon.addEventListener('click', () => {
  if (searchForm.style.display === 'block') { // Vérifie si le formulaire de recherche est déjà affiché
    searchForm.style.display = 'none'; // Masque le formulaire de recherche
  } else {
    searchForm.style.display = 'block'; // Affiche le formulaire de recherche
    searchInput.focus(); // Déclenche le focus sur l'élément d'entrée de texte
  }
});

closeIcon.addEventListener('click', () => {
  sidebar.classList.remove('show'); // Ferme le panneau latéral
});


// JavaScript pour le filtrage en temps réel et la croix pour vider la recherche
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.trim().toUpperCase(); // Supprime les espaces avant et après la saisie et convertit en majuscules
    const links = document.querySelectorAll('.sidebar ul li');
    let found = 0; // Initialise le compteur de résultats trouvés à 0
    
    links.forEach(link => {
      if (link.innerText.toUpperCase().indexOf(filter) > -1) {
        link.style.display = '';
        found++; // Incrémente le compteur de résultats trouvés
      } else {
        link.style.display = 'none';
      }
    });
    
    const message = document.querySelector('.search-message');
    if (filter !== '') { // Vérifie si le champ de recherche n'est pas vide
      if (found > 0) {
        message.innerText = `${found} résultats trouvés`; // Utilisation correcte du template string
    }
    else {
        message.innerText = 'Aucun résultat trouvé.';
      }
    } else {
      message.innerText = ''; // Cache le message si le champ de recherche est vide
    }
  });
  
  const clearSearchIcon = document.querySelector('.clear-search-icon');
clearSearchIcon.addEventListener('click', () => {
  searchInput.value = ''; // Vide le champ de saisie

  const links = document.querySelectorAll('.sidebar ul li');
  links.forEach(link => {
    link.style.display = ''; // Réinitialise l'affichage de tous les liens pour qu'ils soient visibles
  });

  const message = document.querySelector('.search-message');
  message.innerText = ''; // Cache le message
});

document.addEventListener('DOMContentLoaded', function() {
  const parents = document.querySelectorAll('.parent');
  
  parents.forEach(parent => {
      const toggleIcon = parent.querySelector('.toggle-icon');
      parent.addEventListener('click', function(event) {
          const subMenu = this.querySelector('.sub-menu');
          if (subMenu.style.display === 'none' || subMenu.style.display === '') {
              subMenu.style.display = 'block';
              toggleIcon.textContent = '▲'; // Icone lorsque les sous-liens sont affichés
          } else {
              subMenu.style.display = 'none';
              toggleIcon.textContent = '▼'; // Icone lorsque les sous-liens sont cachés
          }
          event.preventDefault();
      });
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopButton = document.querySelector('.scroll-to-top');

  window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
          scrollToTopButton.classList.add('show');
      } else {
          scrollToTopButton.classList.remove('show');
      }
  });

  scrollToTopButton.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var liens = document.querySelectorAll(".lien");
  liens.forEach(function(lien) {
      lien.addEventListener("click", function(event) {
          event.preventDefault(); // Empêcher le comportement par défaut du lien
          var contenuId = this.getAttribute("data-contenu");
          var contenu = document.getElementById("contenu_" + contenuId);
          if (contenu) {
              // Afficher le contenu associé et masquer les autres contenus
              var tousLesContenus = document.querySelectorAll(".contenu");
              tousLesContenus.forEach(function(c) {
                  c.style.display = "none";
              });
              contenu.style.display = "block";
          }
      });
  });
});
