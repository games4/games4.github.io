/* С помощью метода querySelectorAll найдем все переключатели. */
var controls = document.querySelectorAll('.toggle-controls li');


/* Заменим у объекта dataset свойство attribute на filter. */
for (var i = 0; i < controls.length; i++) {
    controls[i].innerHTML = controls[i].dataset.filter;
}
