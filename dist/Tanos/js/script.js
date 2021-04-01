$(document).ready(function(){
    $('.slider__wrapper').slick({
        speed: 800,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/chevronleft.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/chevronright.png"></button>',
    });

    const hamburger = document.querySelector('.promo__menu'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
    });

    menu.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = '';
    });
    
});