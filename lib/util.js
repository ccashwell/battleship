module.exports = {
  getNumber: function() {
    // TODO: Improve? This produces non-uniform distribution.
    return Math.round(Math.random() * 9) + 1;
  },

  getOrientation: function() {
    return Math.round(Math.random());
  },

  getPosition: function(shipSize) {
    // randomly pick a row and column
    var row = this.getNumber();
    var column = this.getNumber();

    if (this.getOrientation() == 0) {
      // vertically oriented
      if (row + shipSize <= 10) {
        return [[row, column], [row + shipSize, column]];
      } else {
        return this.getPosition(shipSize);
      }
    } else {
      // horizontally oriented
      if (column + shipSize <= 10) {
        return [[row, column], [row, column + shipSize]];
      } else {
        return this.getPosition(shipSize);
      }
    }
  },

  getNumberFromLetter: function(letter) {
    return letter.charCodeAt(0) - 65;
  },

  expandPositions: function(positions) {
    var expandedPositions = [];

    if (positions[0][0] != positions[1][0]) {
      // expand coordinates horizontally
      for(i = positions[0][0]; i < positions[1][0]; i++) {
        expandedPositions.push([i, positions[1][0]]);
      }
    } else {
      // expand coordinates vertically
      for(i = positions[0][1]; i < positions[1][1]; i++) {
        expandedPositions.push([positions[0][0], i]);
      }
    }

    return expandedPositions;
  }
}
