/* С помощью метода querySelectorAll найдем все переключатели. */
var controls = document.querySelectorAll('.toggle-controls li');
/* Переместим переменную photo на вторую строчку. */
var photo = document.querySelector('.photo');

/* Заменим у объекта dataset свойство attribute на filter. */
for (var i = 0; i < controls.length; i++) {
    controls[i].innerHTML = controls[i].dataset.filter;
}

function toggleFilter(filterName) {
		/* В цикле удалим класс active у всех переключателей. */
    for (var i = 0; i < controls.length; i++) {
        controls[i].classList.remove('active');
				/* У controls[i].dataset заменим attribute на filter. */
        photo.classList.remove(controls[i].dataset.filter);
    }
    
    var control = document.querySelector('li.' + filterName);
    if (control) {
        control.classList.add('active');
    }

    if (photo) {
        photo.classList.add(filterName);
    }
}

/*Перенесем вызов функции с атрибутом 'walden' на последнюю строчку.
Затем перенесем вызов функции с атрибутом 'kelvin' на последнюю строчку.*/
toggleFilter('toaster');
toggleFilter('walden');
toggleFilter('kelvin');

