let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let x = menu.querySelector('.nav__close');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
   menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
})

x.addEventListener('click', function () {
  menu.classList.remove('header__nav--active');

  document.body.classList.remove('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
     menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})
