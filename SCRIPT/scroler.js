document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', function() {
        // Afficher le bouton lorsque l'utilisateur a fait défiler jusqu'à un certain niveau
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        // Smooth scrolling vers le haut de la page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    let lastScrollTop = 0;
    const footer = document.querySelector('.footer');
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    function handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll vers le bas
            footer.classList.add('hidden');
        } else {
            // Scroll vers le haut
            footer.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Pour éviter des valeurs négatives
    }

    function checkMediaQuery() {
        if (mediaQuery.matches) {
            window.addEventListener('scroll', handleScroll);
        } else {
            window.removeEventListener('scroll', handleScroll);
            footer.classList.remove('hidden'); // S'assurer que le footer est visible sur les grands écrans
        }
    }

    mediaQuery.addListener(checkMediaQuery);
    checkMediaQuery(); // Initial check
});
