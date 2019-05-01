const menuIcon = document.querySelector('.menuIcon');
const google = document.querySelector('.google');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.closeBtn');

menuIcon.addEventListener('click', function(){
  menu.style.width = '75%';
});

closeBtn.addEventListener('click', () => menu.style.width = '0');
