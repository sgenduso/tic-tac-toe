var tileArray = document.getElementsByClassName('tile');
var tileValue = 'X';

[].forEach.call(tileArray, function (e) {
  e.addEventListener('click', function() {
    if (e.innerHTML === ""){
      e.innerHTML = tileValue;
      tileValue = tileValue === 'O' ? 'X' : 'O';
    } else {
      alert('This tile has already been filled, bitch.');
    }
  });
});
