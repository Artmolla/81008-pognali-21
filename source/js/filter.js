const filterForm = document.querySelector('.companion-selection__form');

filterForm.addEventListener('click', function (evt) {
  if (evt && evt.target.classList.contains('companion-selection__button')) {
    evt.preventDefault();
    evt.target.classList.toggle('companion-selection__button--open');
    if (evt.target.nextSibling.classList.contains('companion-selection__list')) {
      evt.target.nextSibling.classList.toggle('companion-selection__list--open');
    } else if (evt.target.nextSibling.classList.contains('level-filter')) {
      evt.target.nextSibling.classList.toggle('level-filter--open');
    } else {
      evt.target.nextSibling.classList.toggle('transport-list--filter-open');
    }
  }
});
