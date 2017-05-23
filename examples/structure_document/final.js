function getRandomColor() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) +
    ',' +
    (Math.floor(Math.random() * 256)) +
    ',' +
    (Math.floor(Math.random() * 256)) + ')';
};

function setColor(collection, color) {
  [].forEach.call(collection, function(el) {
    el.style.backgroundColor = color;
  });
};

document.addEventListener('DOMContentLoaded', function() {
  var leafsOdd = document.querySelectorAll('.head li:nth-child(odd)');
  var leafsEven = document.querySelectorAll('.head li:nth-child(even)');

  setInterval(function() {
    setColor(leafsOdd, getRandomColor());
    setColor(leafsEven, getRandomColor());
  }, 1000);
});
