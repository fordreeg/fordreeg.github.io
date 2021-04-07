const hamburger = document.querySelector('.hamburger'),
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