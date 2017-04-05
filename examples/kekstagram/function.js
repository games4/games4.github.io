// var filterName = 'kelvin';

function toggleFilter(filterName) {
    var control = document.querySelector('li.' + filterName);
    if (control) {
        control.classList.add('active');
    }

    var photo = document.querySelector('.photo');
    if (photo) {
        photo.classList.add(filterName);
    }
}

/* Вызовем функцию toggleFilter с параметром 'toaster'. */
/* Вызовем функцию второй раз с параметром 'kelvin'. */
/* А затем еще раз с параметром 'walden'. */
//toggleFilter('toaster');
//toggleFilter('kelvin');
toggleFilter('walden');