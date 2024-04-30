<<<<<<< HEAD
// Attendre que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {
  
  // Sélectionner tous les éléments avec la classe "parent"
  const parents = document.querySelectorAll('.parent');
  
  // Pour chaque élément parent sélectionné
  parents.forEach(parent => {
    
    // Sélectionner l'icône de basculement à l'intérieur de l'élément parent
    const toggleIcon = parent.querySelector('.toggle-icon');
    
    // Ajouter un écouteur d'événements pour le clic sur l'élément parent
    parent.addEventListener('click', function(event) {
      
      // Sélectionner le sous-menu à l'intérieur de l'élément parent
      const subMenu = this.querySelector('.sub-menu');
      
      // Vérifier si le sous-menu est caché ou affiché
      if (subMenu.style.display === 'none' || subMenu.style.display === '') {
        
        // Si le sous-menu est caché ou non défini, l'afficher
        subMenu.style.display = 'block';
        
        // Changer l'icône pour indiquer que les sous-liens sont affichés
        toggleIcon.textContent = '▲';
        
      } else {
        
        // Si le sous-menu est affiché, le cacher
        subMenu.style.display = 'none';
        
        // Changer l'icône pour indiquer que les sous-liens sont cachés
        toggleIcon.textContent = '▼';
      }
      
      // Empêcher le comportement par défaut du lien
      event.preventDefault();
    });
  });
});


// Attendez que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {

  // Sélectionnez l'élément bouton de retour en haut de la page
  const scrollToTopButton = document.querySelector('.scroll-to-top');

  // Ajoutez un écouteur d'événements pour le défilement de la fenêtre
  window.addEventListener('scroll', function() {
    
    // Vérifiez si le défilement de la fenêtre est supérieur à 300 pixels
    if (window.pageYOffset > 300) {
      
      // Si le défilement est supérieur à 300 pixels, ajoutez une classe CSS pour afficher le bouton
      scrollToTopButton.classList.add('show');
    } else {
      
      // Sinon, retirez la classe CSS pour cacher le bouton
      scrollToTopButton.classList.remove('show');
    }
  });

  // Ajoutez un écouteur d'événements pour le clic sur le bouton de retour en haut de la page
  scrollToTopButton.addEventListener('click', function() {
    
    // Faites défiler la fenêtre jusqu'en haut avec une animation en douceur
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// Attendre que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function() {

  // Sélectionner tous les éléments avec la classe "lien"
  var liens = document.querySelectorAll(".lien");
  
  // Pour chaque lien sélectionné
  liens.forEach(function(lien) {
    
    // Ajouter un écouteur d'événements pour le clic sur le lien
    lien.addEventListener("click", function(event) {
      
      // Empêcher le comportement par défaut du lien
      event.preventDefault();
      
      // Récupérer l'identifiant du contenu associé à partir de l'attribut "data-contenu" du lien
      var contenuId = this.getAttribute("data-contenu");
      
      // Sélectionner le contenu associé à partir de son identifiant
      var contenu = document.getElementById("contenu_" + contenuId);
      
      // Vérifier si le contenu existe
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


=======

// Attendre que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {
  
    // Sélectionner tous les éléments avec la classe "parent"
    const parents = document.querySelectorAll('.parent');
    
    // Pour chaque élément parent sélectionné
    parents.forEach(parent => {
      
      // Sélectionner l'icône de basculement à l'intérieur de l'élément parent
      const toggleIcon = parent.querySelector('.toggle-icon');
      
      // Ajouter un écouteur d'événements pour le clic sur l'élément parent
      parent.addEventListener('click', function(event) {
        
        // Sélectionner le sous-menu à l'intérieur de l'élément parent
        const subMenu = this.querySelector('.sub-menu');
        
        // Vérifier si le sous-menu est caché ou affiché
        if (subMenu.style.display === 'none' || subMenu.style.display === '') {
          
          // Si le sous-menu est caché ou non défini, l'afficher
          subMenu.style.display = 'block';
          
          // Changer l'icône pour indiquer que les sous-liens sont affichés
          toggleIcon.textContent = '▲';
          
        } else {
          
          // Si le sous-menu est affiché, le cacher
          subMenu.style.display = 'none';
          
          // Changer l'icône pour indiquer que les sous-liens sont cachés
          toggleIcon.textContent = '▼';
        }
        
        // Empêcher le comportement par défaut du lien
        event.preventDefault();
      });
    });
  });
  

// Attendez que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {
  
    // Sélectionnez l'élément bouton de retour en haut de la page
    const scrollToTopButton = document.querySelector('.scroll-to-top');
  
    // Ajoutez un écouteur d'événements pour le défilement de la fenêtre
    window.addEventListener('scroll', function() {
      
      // Vérifiez si le défilement de la fenêtre est supérieur à 300 pixels
      if (window.pageYOffset > 300) {
        
        // Si le défilement est supérieur à 300 pixels, ajoutez une classe CSS pour afficher le bouton
        scrollToTopButton.classList.add('show');
      } else {
        
        // Sinon, retirez la classe CSS pour cacher le bouton
        scrollToTopButton.classList.remove('show');
      }
    });
  
    // Ajoutez un écouteur d'événements pour le clic sur le bouton de retour en haut de la page
    scrollToTopButton.addEventListener('click', function() {
      
      // Faites défiler la fenêtre jusqu'en haut avec une animation en douceur
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  
// Attendre que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function() {
  
    // Sélectionner tous les éléments avec la classe "lien"
    var liens = document.querySelectorAll(".lien");
    
    // Pour chaque lien sélectionné
    liens.forEach(function(lien) {
      
      // Ajouter un écouteur d'événements pour le clic sur le lien
      lien.addEventListener("click", function(event) {
        
        // Empêcher le comportement par défaut du lien
        event.preventDefault();
        
        // Récupérer l'identifiant du contenu associé à partir de l'attribut "data-contenu" du lien
        var contenuId = this.getAttribute("data-contenu");
        
        // Sélectionner le contenu associé à partir de son identifiant
        var contenu = document.getElementById("contenu_" + contenuId);
        
        // Vérifier si le contenu existe
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
  
>>>>>>> 8fd0a408ca20ba641a4401343db56a1b126f77b9

