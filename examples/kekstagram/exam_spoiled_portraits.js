var portrait1 = document.querySelector('.portrait-1');
if (portrait1) {
    portrait1.classList.remove('stylize');    
}

var portrait2 = document.querySelector('.portrait-2');
if (portrait2) {
    portrait2.classList.add('shadow');    
}

var portrait3 = document.querySelector('.portrait-3');
if (portrait3) {
    portrait3.classList.remove('invert');
    portrait3.classList.add('colorize');
}

var portrait4 = document.querySelector('.portrait-4');
if (portrait4) {
    portrait4.classList.remove('spoil');
    portrait4.classList.add('burst');
}
