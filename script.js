const hamburger = document.querySelector('.hamburger');
const closemenu = document.querySelector('.icon-close');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', function(){
  hamburger.style.display="none";
  sidebar.style.display="flex"
})

closemenu.addEventListener('click', function(){
  hamburger.style.display="block";
  sidebar.style.display="none"
})