var tileArray = document.getElementsByClassName('tile');
var tileValue = 'X';
var computerPlay = document.getElementById('computer');
var friendPlay = document.getElementById('friend');


var checkWinner = function (tileArray) {
  for (var i = 0; i < tileArray.length; i+=3) {
    if (tileArray[i].innerHTML === tileArray[i+1].innerHTML && tileArray[i].innerHTML === tileArray[i+2].innerHTML && tileArray[i].innerHTML !== '') {
      alert('WINNA WINNA');
      tileValue = 'O';
      [].forEach.call(tileArray, function (e) {
        e.innerHTML = '';
      });
    }
  }
  for (var i = 0; i < 3; i++) {
    if (tileArray[i].innerHTML === tileArray[i+3].innerHTML && tileArray[i].innerHTML === tileArray[i+6].innerHTML && tileArray[i].innerHTML !== '') {
      alert('WINNA WINNA');
      tileValue = 'O';
      [].forEach.call(tileArray, function (e) {
        e.innerHTML = '';
      });
    }
  }
  for (var i = 0; i < 3; i+=2) {
    if(tileArray[i].innerHTML === tileArray[4].innerHTML && tileArray[i].innerHTML === tileArray[8-i].innerHTML && tileArray[i].innerHTML !== '') {
      alert('WINNA WINNA');
      tileValue = 'O';
      [].forEach.call(tileArray, function (e) {
        e.innerHTML = '';
      });
    }
  }
};

var tieCounter = function (tileArray) {
  var counter = 0;
  [].forEach.call(tileArray, function (e) {
    if (e.innerHTML !== '') {
      counter++;
    };
  });
  if (counter === 9) {
    alert("This is a freaking tie");
    tileValue = 'O';
    [].forEach.call(tileArray, function (e) {
      e.innerHTML = '';
    });
  }
};

friendPlay.addEventListener('click', function () {
  friendPlay.className = 'selected';
  computerPlay.classList.remove('selected');
  [].forEach.call(tileArray, function (e) {
    e.innerHTML = '';
  });
  [].forEach.call(tileArray, function (e, i, a) {
    e.addEventListener('click', function() {
      if (e.innerHTML === ""){
        this.innerHTML = tileValue;
        checkWinner(a);
        tieCounter(a);
        tileValue = tileValue === 'O' ? 'X' : 'O';
      } else {
        alert('This tile has already been filled, bitch.');
      }
    });
  });
})

computerPlay.addEventListener('click', function () {
  computerPlay.className = 'selected';
  friendPlay.classList.remove('selected');
  [].forEach.call(tileArray, function (e) {
    e.innerHTML = '';
  });
})
