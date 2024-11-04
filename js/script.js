document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navegationMobile = document.getElementById('navegationMobile');
    const menuLinks = document.querySelectorAll('.navegationMobile ul li a');
  
    // Toggle para abrir/fechar o menu
    menuToggle.addEventListener('click', function() {
      navegationMobile.classList.toggle('active');
    });
  
    // Fechar o menu ao clicar em um item
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        navegationMobile.classList.remove('active');
      });
    });
  });
  