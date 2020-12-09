let openMenuButton = document.querySelector('.page-header__toggle-menu-button');
let menuBody = document.querySelector('.menu__body');
let pageHeader = document.querySelector('.page-header');

openMenuButton.addEventListener('click', function(evt){
  evt.preventDefault();
  menuBody.classList.toggle('menu__body--menu-open');
  openMenuButton.classList.toggle('page-header__toggle-menu-button--menu-open');
  pageHeader.classList.toggle('page-header--menu-open');
});
