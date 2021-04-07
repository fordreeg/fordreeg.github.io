const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuList = document.querySelectorAll('.menu__list-item'),
      menuIcon = document.querySelectorAll('.menu__icon'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
});


closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = '';
});

menuList.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    })
});

menuIcon.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    })
});