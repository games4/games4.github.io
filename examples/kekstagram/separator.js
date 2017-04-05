var separator = document.querySelector('.separator');
var originalPhoto = document.querySelector('.photo-original');
var filteredPhoto = document.querySelector('.photo');
var photoContainer = document.querySelector('.photos');
var flag = false;

separator.addEventListener('mousedown', function(event) {
  event.preventDefault();
  flag = true;
}, false);

document.addEventListener('mouseup', function(event) {
  flag = false;
}, false);

photoContainer.addEventListener('mousemove', function(event) {
  var res = event.pageX - this.offsetLeft;

  if (flag && (res > 0) && (res < filteredPhoto.offsetWidth)) {
    separator.style.left = res + 'px';
    originalPhoto.style.width = res + 'px';
  }

}, false);
