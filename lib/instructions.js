var instructions = [
  "The Goal: ".bold +
  "Destroy your opponent's ships before they destroy yours.\n",
  "The Rules:".bold,
  "- Each player starts with " + "five ships".bold + ":",
  "  > (1) Carrier    [5 cells]",
  "  > (1) Battleship [4 cells]",
  "  > (1) Cruiser    [3 cells]",
  "  > (1) Submarine  [3 cells]",
  "  > (1) Destroyer  [2 cells]",
  "- Each ship must be placed within confines of a 10x10 game board.",
  "- Ships may be oriented horizontally or vertically, but not diagonally.",
  "- Players fire once at one previously unattacked grid position each turn.",
  "- A ship is considered destroyed when all of its cells have been attacked.",
  "- A player is considered victorious after 17 successful attacks."
];

module.exports = instructions.join('\n');
