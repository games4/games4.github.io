/* Изменим значение переменной filterName на kelvin.*/
var filterName = 'kelvin'; 

/*Заменим значение 'selector' в методе поиска активного переключателя на 'li.' + filterName. */
/* Найдем элемент списка с классом 'li.' + filterName и добавим ему класс active */
var control = document.querySelector('li.' + filterName);
if (control) {
    control.classList.add('active');
}

/* А в методе добавления класса для большого фото изменим значение 'class' на переменную filterName. */
var photo = document.querySelector('.photo');
if (photo) {
    photo.classList.add(filterName);
}


