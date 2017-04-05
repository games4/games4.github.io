// Давайте подвигаем ползунок.
// Cохраним элемент .photo-original в переменную original, а элемент .separator в переменную separator.
var original = document.querySelector('.photo-original');
var separator = document.querySelector('.separator');

// Зададим для original ширину 25%, а для separator левую координату 25%.
// Заменим эти значения на 75%.
if (original && separator) {
    original.style.width = '75%';
    separator.style.left = '75%';
}

// С помощью метода querySelectorAll найдем все переключатели. 
var controls = document.querySelectorAll('.toggle-controls li');
// Переместим переменную photo на вторую строчку. 
var photo = document.querySelector('.photo');

// Заменим у объекта dataset свойство attribute на filter. 
for (var i = 0; i < controls.length; i++) {
    controls[i].innerHTML = controls[i].dataset.filter;
    // вызов функции clickControl добавить здесь
		// В цикле для каждого элемента управления вызовем функцию clickControl, передав в параметре текущий элемент. 
    clickControl(controls[i]);		
}

// Изменим параметр у toggleFilter, теперь это не строка, а элемент:
/* Было:  
function toggleFilter(filterName)
*/
// Стало:
function toggleFilter(control) {
		/* В цикле удалим класс active у всех переключателей. */
    for (var i = 0; i < controls.length; i++) {
        controls[i].classList.remove('active');
				/* У controls[i].dataset заменим attribute на filter. */
        photo.classList.remove(controls[i].dataset.filter);
    }
    
// В toggleFilter передаётся переключатель и искать его уже не надо, удаляем лишний код: 
/* Было
    var control = document.querySelector('li.' + filterName);
    if (control) {
        control.classList.add('active');
    }
*/
    // стало
		control.classList.add('active');
		
    if (photo) {
        photo.classList.add(control.dataset.filter);
    }
}

function clickControl(control) {
    control.addEventListener('click', function() {
				// Изменим обработчик внутри clickControl
				// Было:  toggleFilter(control.dataset.filter);
        //Стало: 
				toggleFilter(control);
    });
};

// В переменную defaultFilter сохраним переключатель li.toaster. 
var defaultFilter = document.querySelector('li.toaster');

//И в конце кода вызовем функцию toggleFilter с только что сохраненным переключателем.
toggleFilter(defaultFilter);


