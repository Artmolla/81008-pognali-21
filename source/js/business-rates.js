let showBusinessRatesButton = document.querySelector('.button--business-rates');
let businessRatesPopup = document.querySelector('.business-rates');

showBusinessRatesButton.addEventListener('click', function(evt){
  evt.preventDefault();
  businessRatesPopup.classList.add('business-rates--open');
  if(businessRatesPopup.classList.contains('business-rates--open')){
    let closeBusinessRatesPopupButton = businessRatesPopup.querySelector('.business-rates__button');
    closeBusinessRatesPopupButton.addEventListener('click', function(evt){
      evt.preventDefault();
      businessRatesPopup.classList.remove('business-rates--open');
    })
  }
});
