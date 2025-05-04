# Chess Puzzle Generator


## Design

- Image of board
- Solution + Button to copy to clipboard
- Settings
    - Board theme (extract from https://www.chess.com/settings)
    - Pieces theme
    - Board size (0,1,2,3)
    - Flip (auto, white, black)
    - Puzzle theme (https://github.com/lichess-org/lila/blob/master/translation/source/puzzleTheme.xml)
    - Difficulty ("easiest" "easier" "normal" "harder" "hardest")
    - Post template
- Button to generate a new puzzle
- Button to copy to clipboard

## How to

- Get puzzle from https://lichess.org/api#tag/Puzzles/operation/apiPuzzleNext
- Convert PGN to FEN with https://github.com/MattMaginniss/pgn-to-fen/blob/main/PGNtoFEN.js
- Get board image using https://www.chess.com/dynboard?fen=8/R4pk1/4pbp1/3p4/3P1P2/4Q1Pp/7K/3q4%20b%20-%20-%203%2047&board=dark_wood&piece=neo&size=3&flip=true