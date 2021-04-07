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


const overlay = document.querySelector('.overlay'),
          modalClose = document.querySelector('.modal__close'),
          modal = document.querySelector('.modal');


// Отправка данных на сервер
function send(event, php){
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
        json = JSON.parse(this.response);
            console.log(json);
            
            if (json.result == "success") {
                overlay.style.display = "block";
                modal.style.display = "block";
                document.body.style.overflow = 'hidden';
                document.getElementById('name').value = "";
                document.getElementById('mail').value = "";
                document.getElementById('message').value = "";

            } else {
                alert("Ошибка. Сообщение не отправлено");
            }
        } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
    
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
    };

    modalClose.addEventListener('click', () =>{
        overlay.style.display = "";
        modal.style.display = "";
        document.body.style.overflow = '';
    });