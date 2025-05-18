import {
  BLACK,
  Chess,
  DEFAULT_POSITION,
  WHITE,
} from "https://cdn.skypack.dev/chess.js";
import { BOARDS } from "./src/boards.js";
import { PIECES } from "./src/pieces.js";
import { TYPES } from "./src/types.js";

const DIFFULTIES = ["easiest", "easier", "normal", "harder", "hardest"];
const DEFAULT_SIZE = 3;
const PUZZLE_API_URL = "https://lichess.org/api/puzzle/next?";
const DYNBOARD_API_URL = "https://www.chess.com/dynboard?";
const TURNS = { w: "White to move!", b: "Black to move!" };

let CURRENT_FEN = DEFAULT_POSITION;
let CURRENT_TURN;

const board = document.getElementById("board-select");
const pieces = document.getElementById("pieces-select");
const type = document.getElementById("type-select");
const difficulty = document.getElementById("difficulty-range");
const generate = document.getElementById("generate-btn");
const puzzle = document.getElementById("puzzle-img");
const turn = document.getElementById("turn-text");
const solution = document.getElementById("solution-text");

const fill = (select, arr) =>
  arr.forEach((x) =>
    select.appendChild(new Option(x.text, x.value, false, x.default))
  );

fill(board, BOARDS);
fill(pieces, PIECES);
fill(type, TYPES);

const updateBoard = (fen, flip) => {
  var params = {
    fen,
    board: board.value,
    piece: pieces.value,
    size: DEFAULT_SIZE,
    coordinates: true,
  };
  if (flip) {
    params.flip = true;
  }
  puzzle.src = DYNBOARD_API_URL + new URLSearchParams(params);
  turn.textContent = TURNS[CURRENT_TURN];
};

const updatePuzzle = (json) => {
  const pgn = json.game.pgn.split(" ");

  const game = new Chess();
  pgn.forEach((m) => game.move(m));

  CURRENT_FEN = game.fen();
  CURRENT_TURN = game.turn();
  updateBoard(CURRENT_FEN, CURRENT_TURN == BLACK);
  solution.value = json.puzzle.solution.join(" ");
};

const nextPuzzle = () =>
  fetch(
    PUZZLE_API_URL +
      new URLSearchParams({
        angle: type.value,
        difficulty: DIFFULTIES[difficulty.value],
      })
  )
    .then((res) => res.json())
    .then(updatePuzzle);

generate.addEventListener("click", nextPuzzle);
board.addEventListener("change", () => updateBoard(CURRENT_FEN));
pieces.addEventListener("change", () => updateBoard(CURRENT_FEN));

updateBoard(CURRENT_FEN);
