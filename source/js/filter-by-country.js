let openFilterButton = document.querySelector('.button--open-filter');
let countriesFilterPopup = document.querySelector('.alphabet--catalog');
let continentsList = document.querySelector('.continents--catalog');
let minimizeFilterButton = document.querySelector('.button--minimize');

openFilterButton.addEventListener('click', function(evt){
  evt.preventDefault();
  countriesFilterPopup.classList.toggle('alphabet--open');
  openFilterButton.classList.toggle('button--close-filter');
  continentsList.classList.toggle('continents--open');
  minimizeFilterButton.classList.toggle('button--visible');
});
