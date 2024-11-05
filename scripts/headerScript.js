document.getElementById('menu-toggle').addEventListener('click', function(event) {
    event.stopPropagation(); // جلوگیری از بسته شدن منو هنگام کلیک روی دکمه
    document.querySelector('.side-menu').classList.toggle('open');
    document.querySelector('.overlay').classList.toggle('active');
  });
  document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector('.side-menu').classList.remove('open');
    document.querySelector('.overlay').classList.remove('active');
  });

  document.addEventListener('click', function(event) {
    var sideMenu = document.querySelector('.side-menu');
    var burgerMenu = document.querySelector('.burger-menu');
    var overlay = document.querySelector('.overlay');
  
    if (!sideMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
      sideMenu.classList.remove('open');
      overlay.classList.remove('active');
    }
  });
  document.getElementById('close-menu').addEventListener('click', function() {
    document.querySelector('.side-menu').classList.remove('open');
    document.querySelector('.overlay').classList.remove('active');
  });