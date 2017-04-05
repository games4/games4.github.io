// Добавление класса элементу, переданному в качестве параметра. Название класса составляется с помощью data-атрибута этого элемента
function setNumber(element) {
    element.classList.add('color-' + element.dataset.number);
}

// Добавление элементу четырёхцветного фона
function reColor(element) {
    var baseColor = getComputedStyle(element).borderTopColor;
    var color = baseColor.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
    element.style.borderTopColor = colorShift(color, 40);
    element.style.borderRightColor = colorShift(color, 60);
    element.style.borderBottomColor = colorShift(color, 80);
    element.style.borderLeftColor = colorShift(color, 20);
}

// Смещение цветового тона
function colorShift(color, shift) {
    var rgb = '#';
    for (var i = 1; i <= 3; i++) { 
        var part = parseInt(color[i]) - shift;
        part = Math.round(Math.min(Math.max(0, part), 255));
        part = part.toString(16);
        rgb += ('00' + part).substr(part.length);
    }
    return rgb;
}

var controls = document.querySelectorAll('.chips li');
for (var i = 0; i < controls.length; i++) {
    controls[i].innerHTML = controls[i].dataset.number;
    setNumber(controls[i]);
    reColor(controls[i]);
}
