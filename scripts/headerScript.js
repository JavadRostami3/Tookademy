document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('.side-menu').classList.toggle('open');
  });
 document.addEventListener('click', function(event) {
    var sideMenu = document.querySelector('.side-menu');
    var burgerMenu = document.querySelector('.burger-menu');
  
    // اگر کلیک خارج از side-menu و burger-menu باشد
    if (!sideMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
      sideMenu.classList.remove('open'); // بستن منو
    }
  });