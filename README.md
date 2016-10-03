# Battleship

A simple command-line implementation of the classic Hasboro game.

## Quick Start

```
git clone git@github.com:ccashwell/battleship
cd battleship
chmod +x ./battleship
./battleship [options]
```

## Options

- `--help` (or `-h`) — Print helpful usage information.
- `--cheat` (or `-c`) — Show the positions of ships on the gameboard.
- `--verbose` (or `-v`) — Print gameboard state after each turn.

## Design Decisions

- **No Tests**: Due to time constraints I did not implement any testing.
- **One-sided Gameplay**: Due to time constraints I did not implement an AI player.
- **External Dependencies**: While not necessary, I used 3 external libraries.
  - [commander](https://github.com/tj/commander.js) was used to simplify command
    line interactions.
  - [prompt](https://github.com/flatiron/prompt) was used to provide a nice and
    clean user input mechanism with built-in validations.
  - [colors](https://github.com/Marak/colors.js) was used to add bash formatting
    without littering the implementation with bash escape codes.

## Contributing

While this is just a simple example implementation, you're welcome to offer any
contributions. Just clone the repo, make some commits and open a pull request.
