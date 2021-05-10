const overlay = document.querySelector('.overlay'),
      modalClose = document.querySelector('.modal-close'),
      modal = document.querySelector('.modal');

document.body.addEventListener('click', (e) => {
    if(e.target === modalClose || e.target === overlay) {
        overlay.style.display = "none";
        modal.style.display = "none";
        document.body.style.overflow = 'unset';
    }

});

// Отправка данных на сервер
function send(event, php){
    console.log("Отправка запроса");

    event.preventDefault ? event.preventDefault() : event.returnValue = false;

    let req = new XMLHttpRequest();

    req.open('POST', php, true);
    req.onload = function() {

        if (req.status >= 200 && req.status < 400) {

            let json = JSON.parse(this.response);

            console.log(json);
            
            if (json.result === "success") {
                overlay.style.display = "block";
                modal.style.display = "block";
                document.body.style.overflow = 'hidden';
                document.getElementById('name').value = "";
                document.getElementById('mail').value = "";
                document.getElementById('message').value = "";

            } else {
                alert("Ошибка. Сообщение не отправлено");
            }
        } else {
            alert("Ошибка сервера. Номер: "+req.status);
        }
    };
    
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {
        alert("Ошибка отправки запроса");
    };

    req.send(new FormData(event.target));
}
