var tileArray = document.getElementsByClassName('tile');
var tileValue = 'X';
var computerPlay = document.getElementById('computer');
var friendPlay = document.getElementById('friend');


var clearBoard = function () {
  [].forEach.call(tileArray, function (e) {
    e.innerHTML = '';
  });
};

var checkWinner = function (tileArray, button) {
  for (var i = 0; i < tileArray.length; i+=3) {
    if (tileArray[i].innerHTML === tileArray[i+1].innerHTML && tileArray[i].innerHTML === tileArray[i+2].innerHTML && tileArray[i].innerHTML !== '') {
      alert('WINNA WINNA', button);
      tileValue = 'O';
      clearBoard();
    }
    else if (button === computerPlay) {

    }
  }
  for (var i = 0; i < 3; i++) {
    if (tileArray[i].innerHTML === tileArray[i+3].innerHTML && tileArray[i].innerHTML === tileArray[i+6].innerHTML && tileArray[i].innerHTML !== '') {
      alert('WINNA WINNA');
      tileValue = 'O';
      clearBoard();
    }
  }
  for (var i = 0; i < 3; i+=2) {
    if(tileArray[i].innerHTML === tileArray[4].innerHTML && tileArray[i].innerHTML === tileArray[8-i].innerHTML && tileArray[i].innerHTML !== '') {
      alert('WINNA WINNA');
      tileValue = 'O';
      clearBoard();
    }
  }
};

var tieCounter = function (tileArray, button) {
  var counter = 0;
  [].forEach.call(tileArray, function (e) {
    if (e.innerHTML !== '') {
      counter++;
    }
  });
  if (counter === 9) {
    alert("This is a freaking tie");
    tileValue = 'O';
    clearBoard();
  }
};

friendPlay.addEventListener('click', function () {
  friendPlay.className = 'selected';
  computerPlay.classList.remove('selected');
  clearBoard();
  [].forEach.call(tileArray, function (e, i, a) {
    e.addEventListener('click', function() {
      if (e.innerHTML === ""){
        this.innerHTML = tileValue;
        checkWinner(a, friendPlay);
        tieCounter(a, friendPlay);
        tileValue = tileValue === 'O' ? 'X' : 'O';
      } else {
        alert('This tile has already been filled, bitch.');
      }
    });
  });
});

computerPlay.addEventListener('click', function () {
  computerPlay.className = 'selected';
  friendPlay.classList.remove('selected');
  clearBoard();
  var computerMoveArray = [].map.call(tileArray, function (e, i) {
    return i;
  });
  [].forEach.call(tileArray, function (e, i, a) {
    e.addEventListener('click', function() {
      if (e.innerHTML === ''){
        this.innerHTML = tileValue;
        checkWinner(a, computerPlay);
        tieCounter(a, computerPlay);
        tileValue = tileValue === 'O' ? 'X' : 'O';
        computerMoveArray.splice(computerMoveArray.indexOf(i), 1);
        if (computerMoveArray.length !== 0) {
          var computerMove = Math.floor(Math.random() * (computerMoveArray.length));
          tileArray[computerMoveArray[computerMove]].innerHTML = tileValue;
          tileValue = tileValue === 'O' ? 'X' : 'O';
          computerMoveArray.splice(computerMove, 1);
          checkWinner(a, computerPlay);
          tieCounter(a, computerPlay);
          console.log(e, "MY MOVE");
          console.log(computerMoveArray, "AVAILABLE COMPUTER MOVES");
          console.log(computerMove, "THE RANDOM CHOICE FOR THE COMPUTER");
          console.log(tileArray[computerMoveArray[computerMove]], " THE COMPUTERS TILE MOVE");
        }
      } else {
        alert('This tile has already been filled, bitch.');
      }
    });
  });

});
