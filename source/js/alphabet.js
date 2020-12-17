let openAlphabetButton = document.querySelectorAll('.planner__open-countries-list');
let alphabet = document.querySelector('.alphabet');

openAlphabetButton.forEach(button => button.addEventListener('click', function(evt){
  evt.preventDefault();
  alphabet.classList.add('alphabet--open');
  if (alphabet.classList.contains('alphabet--open')) {
    let closeAlphabetButton = alphabet.querySelector('.button--close-alphabet');
    closeAlphabetButton.addEventListener('click', function(evt){
      evt.preventDefault();
      alphabet.classList.remove('alphabet--open');
    });
  }
}));
