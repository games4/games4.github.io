/* Найдем элемент списка с классом .toaster и удалим у него класс active */

var toasterControl = document.querySelector('li.toaster');
if (toasterControl) {
    toasterControl.classList.remove('active');
}

/* Найдем элемент списка с классом walden и добавим ему класс active */

var waldenControl = document.querySelector('li.walden');
if (waldenControl) {
    waldenControl.classList.add('active');
}

/* Найдем элемент с классом .photo, удалим у него класс toaster и добавим класс walden */

var photo = document.querySelector('.photo');
if (photo) {
    photo.classList.remove('toaster');
    photo.classList.add('walden');
}
