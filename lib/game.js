var utils = require('./util');

var Game = function() {
  this.gameboard = [];
  this.stats = { hits: 0, shots: 0 };

  for(i = 0; i < 10; i++) {
    // Generate a 10x10 gameboard (two-dimensional array, pre-filled with zeros)
    this.gameboard.push([].slice.call(new Uint8Array(10)))
  }

  return this;
};

Game.prototype.getStats = function () {
  return this.stats;
};

Game.prototype.fireTorpedo = function(position) {
  this.stats.shots++;

  // translate column letter and row display number to array indexes
  position.column = utils.getNumberFromLetter(position.column);
  position.row--;

  switch(this.gameboard[position.row][position.column]) {
    // State: 0 = Empty, 1 = Ship, 2 = Hit, 3 = Miss
    case 0:
      // no ship here == new miss
      this.gameboard[position.row][position.column] = 3;
      console.log('Sorry, that\'s a miss.');
      break;
    case 1:
      // unhit ship here == new hit
      this.gameboard[position.row][position.column] = 2;
      this.stats.hits++;

      if (this.stats.hits == 17) {
        // Hasboro's rules state a player is victorious after exactly 17 hits
        console.log('Congratulations!'.bold + ' You sunk all my battleships!');
      } else {
        console.log('Boom!'.bold + ' That\'s a hit, %d more to win.', 17 - this.stats.hits);
      }

      break;
    case 2:
    case 3:
      // previously hit or missed
      console.log('Way to waste a turn! You already fired at this position.');
      break;
  }

  // return new position state
  return this.gameboard[position.row][position.column];
};

Game.prototype.positionShips = function() {
  var gameboard = this.gameboard;
  var ships = [5, 4, 3, 3, 2];

  ships.forEach(function(shipSize) {
    var position;

    do {
      var possiblePosition = utils.expandPositions(utils.getPosition(shipSize));
      var isAllClear = possiblePosition.every(function(pos) {
        return gameboard[pos[0]-1][pos[1]-1] == 0;
      });

      if (isAllClear) position = possiblePosition;
    } while (!position);

    position.forEach(function(pos) {
      gameboard[pos[0]-1][pos[1]-1] = 1;
    });
  });
}

Game.prototype.renderForConsole = function(isCheating) {
  var gameboard = this.gameboard;
  var output = [];

  var columnHeaders = ['   '.black.bgWhite];
  for(i = 65; i < 75; i++) {
    columnHeaders.push((' ' + String.fromCharCode(i) + ' ').black.bgWhite);
  }

  var rows = [0,1,2,3,4,5,6,7,8,9].map(function(number) {
    var row = (' ' + (number+1) + ' ').slice(-3).black.bgWhite;

    gameboard[number].map(function(position) {
      switch(position) {
        case 0:
        row += ' ? '.black.bgWhite
        break;
        case 1:
        row += (isCheating ? ' - '.green.bgWhite : ' ? '.black.bgWhite);
        break;
        case 2:
        row += ' ! '.black.bgRed
        break;
        case 3:
        row += ' ø '.white.bgBlue
        break;
      }
    });

    return row;
  });

  var legend = [
    '!'.black.bgRed + ' = Hit!',
    'ø'.white.bgBlue + ' = Miss',
    '?'.black.bgWhite + ' = Unknown'
  ];

  output.push(columnHeaders.join(''));
  output.push(rows.join('\n'));
  output.push(legend.join(' / '));

  return output.join('\n');
}

module.exports = Game;
