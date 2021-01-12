const openMenuButton = document.querySelector('.page-header__toggle-menu-button');
const menuBody = document.querySelector('.menu__body');
const pageHeader = document.querySelector('.page-header');
const authorizationButton = document.querySelector('.authorization');
const headerLogoMobile = document.querySelector('.page-header__image--mobile-png');
const headerLogoMobileWebp = document.querySelector('.page-header__image--mobile-webp');
const headerLogoTablet = document.querySelector('.page-header__image--tablet-png');
const headerLogoTabletWebp = document.querySelector('.page-header__image--tablet-webp');
const headerLogoDesktop = document.querySelector('.page-header__image--desktop-png');
const headerLogoDesktopWebp = document.querySelector('.page-header__image--desktop-webp');

openMenuButton.classList.remove('page-header__toggle-menu-button--no-js');
menuBody.classList.remove('menu__body--menu-open');
openMenuButton.classList.remove('page-header__toggle-menu-button--menu-open');
pageHeader.classList.remove('page-header--menu-open');
pageHeader.classList.remove('page-header--no-js');
authorizationButton.classList.remove('authorization--menu-open');

window.addEventListener('scroll', function (evt) {
  evt.preventDefault();

  if (pageYOffset === 0) {
    pageHeader.classList.remove('page-header--scroll');
    openMenuButton.classList.remove('page-header__toggle-menu-button--scroll');
  } else if (pageYOffset > 0) {
    pageHeader.classList.add('page-header--scroll');
    openMenuButton.classList.add('page-header__toggle-menu-button--scroll');
  }
  changeLogo();
})

openMenuButton.addEventListener('click', function(evt){
  evt.preventDefault();
  menuBody.classList.toggle('menu__body--menu-open');
  openMenuButton.classList.toggle('page-header__toggle-menu-button--menu-open');
  pageHeader.classList.toggle('page-header--menu-open');
  authorizationButton.classList.toggle('authorization--menu-open');
  changeLogo();
});

let changeLogo = function() {
  if (pageHeader.classList.contains('page-header--menu-open') === true) {
    headerLogoMobile.src = 'img/logos/logo-blue-mobile.png';
    headerLogoMobile.srcset = 'img/logos/logo-blue-mobile@2x.png 2x';
    headerLogoMobileWebp.srcset = 'img/logos/logo-blue-mobile.webp 1x, img/logos/logo-blue-mobile@2x.webp 2x';
    headerLogoTablet.srcset = 'img/logos/logo-blue-tablet.png 1x, img/logos/logo-blue-tablet@2x.png 2x';
    headerLogoTabletWebp.srcset = 'img/logos/logo-blue-tablet.webp 1x, img/logos/logo-blue-tablet@2x.webp 2x';
  } else if (pageHeader.classList.contains('page-header--scroll') === true) {
    headerLogoMobile.src = 'img/logos/logo-blue-mobile.png';
    headerLogoMobile.srcset = 'img/logos/logo-blue-mobile@2x.png 2x';
    headerLogoMobileWebp.srcset = 'img/logos/logo-blue-mobile.webp 1x, img/logos/logo-blue-mobile@2x.webp 2x';
    headerLogoTablet.srcset = 'img/logos/logo-blue-tablet.png 1x, img/logos/logo-blue-tablet@2x.png 2x';
    headerLogoTabletWebp.srcset = 'img/logos/logo-blue-tablet.webp 1x, img/logos/logo-blue-tablet@2x.webp 2x';
    headerLogoDesktop.srcset = 'img/logos/logo-blue-desktop.png 1x, img/logos/logo-blue-desktop@2x.png 2x';
    headerLogoDesktopWebp.srcset = 'img/logos/logo-blue-desktop.webp 1x, img/logos/logo-blue-desktop@2x.webp 2x';
  } else {
    headerLogoMobile.src = 'img/logos/logo-white-mobile.png';
    headerLogoMobile.srcset = 'img/logos/logo-white-mobile@2x.png 2x';
    headerLogoMobileWebp.srcset = 'img/logos/logo-white-mobile.webp 1x, img/logos/logo-white-mobile@2x.webp 2x';
    headerLogoTablet.srcset = 'img/logos/logo-tablet.png 1x, img/logos/logo-tablet@2x.png 2x';
    headerLogoTabletWebp.srcset = 'img/logos/logo-tablet.webp 1x, img/logos/logo-tablet@2x.webp 2x';
    headerLogoDesktop.srcset = 'img/logos/logo-desktop.png 1x, img/logos/logo-desktop@2x.png 2x';
    headerLogoDesktopWebp.srcset = 'img/logos/logo-desktop.webp 1x, img/logos/logo-desktop@2x.webp 2x';
  }
}

changeLogo();
