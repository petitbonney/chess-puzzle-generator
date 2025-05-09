import { BOARDS } from "./src/boards.js";
import { PIECES } from "./src/pieces.js";
import { TYPES } from "./src/types.js";
import { Chess, DEFAULT_POSITION } from "https://cdn.skypack.dev/chess.js";

const DIFFULTIES = ["easiest", "easier", "normal", "harder", "hardest"];
const DEFAULT_SIZE = 3;
const PUZZLE_API_URL = "https://lichess.org/api/puzzle/next?";
const DYNBOARD_API_URL = "https://www.chess.com/dynboard?";
let CURRENT_FEN = DEFAULT_POSITION;

const board = document.getElementById("board-select");
const pieces = document.getElementById("pieces-select");
const type = document.getElementById("type-select");
const difficulty = document.getElementById("difficulty-range");
const generate = document.getElementById("generate-btn");
const puzzle = document.getElementById("puzzle-img");
const solution = document.getElementById("solution-text");

BOARDS.forEach((b) => board.appendChild(new Option(b, b)));
PIECES.forEach((p) => pieces.appendChild(new Option(p, p)));
TYPES.forEach((t) => type.appendChild(new Option(t.name, t.name)));

const url = (params) =>
  PUZZLE_API_URL +
  Object.keys(params)
    .reduce((result, key) => {
      result.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
      );
      return result;
    }, [])
    .join("&");

const PGNtoFEN = (pgn) => {
  const game = new Chess();
  pgn.forEach((m) => game.move(m));
  return game.fen();
};

const setBoard = (fen) => {
  puzzle.src =
    DYNBOARD_API_URL +
    new URLSearchParams({
      fen,
      board: board.value,
      piece: pieces.value,
      size: DEFAULT_SIZE,
      coordinates: true,
    });
};

const updatePuzzle = (json) => {
  const pgn = json.game.pgn.split(" ");
  CURRENT_FEN = PGNtoFEN(pgn);
  setBoard(CURRENT_FEN);
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
board.addEventListener("change", () => setBoard(CURRENT_FEN));
pieces.addEventListener("change", () => setBoard(CURRENT_FEN));

setBoard(CURRENT_FEN);
