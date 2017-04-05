/* Найдем переключатель li.walden и сохраним в переменную. */
var walden = document.querySelector('li.walden');


/* walden.dataset.attribute заменим на filter, чтобы у переключателя появился текст из data-аттрибута. */
if (walden) {
    walden.innerHTML = walden.dataset.filter;
}
