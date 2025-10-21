 // Smooth scroll (optional for browsers that don’t support CSS scroll-behavior)
    document.querySelector('.arrow').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});
