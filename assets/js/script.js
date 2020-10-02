const hamburger = document.querySelector('.menu-hamburger');

hamburger.addEventListener('click', function(){
  document.querySelector('.sidebar-menu').classList.toggle('show-menu');
  document.querySelector('.sidebar-menu').classList.remove('sidebar');
  
})