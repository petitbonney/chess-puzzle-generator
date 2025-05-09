export const TYPES = [
  {
    name: "advancedPawn",
    description: "Advanced pawn",
  },
  {
    name: "advancedPawnDescription",
    description:
      "One of your pawns is deep into the opponent position, maybe threatening to promote.",
  },
  {
    name: "advantage",
    description: "Advantage",
  },
  {
    name: "advantageDescription",
    description:
      "Seize your chance to get a decisive advantage. (200cp ≤ eval ≤ 600cp)",
  },
  {
    name: "anastasiaMate",
    description: "Anastasia's mate",
  },
  {
    name: "anastasiaMateDescription",
    description:
      "A knight and rook or queen team up to trap the opposing king between the side of the board and a friendly piece.",
  },
  {
    name: "arabianMate",
    description: "Arabian mate",
  },
  {
    name: "arabianMateDescription",
    description:
      "A knight and a rook team up to trap the opposing king on a corner of the board.",
  },
  {
    name: "attackingF2F7",
    description: "Attacking f2 or f7",
  },
  {
    name: "attackingF2F7Description",
    description:
      "An attack focusing on the f2 or f7 pawn, such as in the fried liver opening.",
  },
  {
    name: "attraction",
    description: "Attraction",
  },
  {
    name: "attractionDescription",
    description:
      "An exchange or sacrifice encouraging or forcing an opponent piece to a square that allows a follow-up tactic.",
  },
  {
    name: "backRankMate",
    description: "Back rank mate",
  },
  {
    name: "backRankMateDescription",
    description:
      "Checkmate the king on the home rank, when it is trapped there by its own pieces.",
  },
  {
    name: "bishopEndgame",
    description: "Bishop endgame",
  },
  {
    name: "bishopEndgameDescription",
    description: "An endgame with only bishops and pawns.",
  },
  {
    name: "bodenMate",
    description: "Boden's mate",
  },
  {
    name: "bodenMateDescription",
    description:
      "Two attacking bishops on criss-crossing diagonals deliver mate to a king obstructed by friendly pieces.",
  },
  {
    name: "castling",
    description: "Castling",
  },
  {
    name: "castlingDescription",
    description: "Bring the king to safety, and deploy the rook for attack.",
  },
  {
    name: "capturingDefender",
    description: "Capture the defender",
  },
  {
    name: "capturingDefenderDescription",
    description:
      "Removing a piece that is critical to defence of another piece, allowing the now undefended piece to be captured on a following move.",
  },
  {
    name: "crushing",
    description: "Crushing",
  },
  {
    name: "crushingDescription",
    description:
      "Spot the opponent blunder to obtain a crushing advantage. (eval ≥ 600cp)",
  },
  {
    name: "doubleBishopMate",
    description: "Double bishop mate",
  },
  {
    name: "doubleBishopMateDescription",
    description:
      "Two attacking bishops on adjacent diagonals deliver mate to a king obstructed by friendly pieces.",
  },
  {
    name: "dovetailMate",
    description: "Dovetail mate",
  },
  {
    name: "dovetailMateDescription",
    description:
      "A queen delivers mate to an adjacent king, whose only two escape squares are obstructed by friendly pieces.",
  },
  {
    name: "equality",
    description: "Equality",
  },
  {
    name: "equalityDescription",
    description:
      "Come back from a losing position, and secure a draw or a balanced position. (eval ≤ 200cp)",
  },
  {
    name: "kingsideAttack",
    description: "Kingside attack",
  },
  {
    name: "kingsideAttackDescription",
    description:
      "An attack of the opponent's king, after they castled on the king side.",
  },
  {
    name: "clearance",
    description: "Clearance",
  },
  {
    name: "clearanceDescription",
    description:
      "A move, often with tempo, that clears a square, file or diagonal for a follow-up tactical idea.",
  },
  {
    name: "defensiveMove",
    description: "Defensive move",
  },
  {
    name: "defensiveMoveDescription",
    description:
      "A precise move or sequence of moves that is needed to avoid losing material or another advantage.",
  },
  {
    name: "deflection",
    description: "Deflection",
  },
  {
    name: "deflectionDescription",
    description:
      "A move that distracts an opponent piece from another duty that it performs, such as guarding a key square. Sometimes also called 'overloading'.",
  },
  {
    name: "discoveredAttack",
    description: "Discovered attack",
  },
  {
    name: "discoveredAttackDescription",
    description:
      "Moving a piece (such as a knight), that previously blocked an attack by a long range piece (such as a rook), out of the way of that piece.",
  },
  {
    name: "doubleCheck",
    description: "Double check",
  },
  {
    name: "doubleCheckDescription",
    description:
      "Checking with two pieces at once, as a result of a discovered attack where both the moving piece and the unveiled piece attack the opponent's king.",
  },
  {
    name: "endgame",
    description: "Endgame",
  },
  {
    name: "endgameDescription",
    description: "A tactic during the last phase of the game.",
  },
  {
    name: "enPassantDescription",
    description:
      "A tactic involving the en passant rule, where a pawn can capture an opponent pawn that has bypassed it using its initial two-square move.",
  },
  {
    name: "exposedKing",
    description: "Exposed king",
  },
  {
    name: "exposedKingDescription",
    description:
      "A tactic involving a king with few defenders around it, often leading to checkmate.",
  },
  {
    name: "fork",
    description: "Fork",
  },
  {
    name: "forkDescription",
    description:
      "A move where the moved piece attacks two opponent pieces at once.",
  },
  {
    name: "hangingPiece",
    description: "Hanging piece",
  },
  {
    name: "hangingPieceDescription",
    description:
      "A tactic involving an opponent piece being undefended or insufficiently defended and free to capture.",
  },
  {
    name: "hookMate",
    description: "Hook mate",
  },
  {
    name: "hookMateDescription",
    description:
      "Checkmate with a rook, knight, and pawn along with one enemy pawn to limit the enemy king's escape.",
  },
  {
    name: "interference",
    description: "Interference",
  },
  {
    name: "interferenceDescription",
    description:
      "Moving a piece between two opponent pieces to leave one or both opponent pieces undefended, such as a knight on a defended square between two rooks.",
  },
  {
    name: "intermezzo",
    description: "Intermezzo",
  },
  {
    name: "intermezzoDescription",
    description:
      "Instead of playing the expected move, first interpose another move posing an immediate threat that the opponent must answer. Also known as 'Zwischenzug' or 'In between'.",
  },
  {
    name: "killBoxMate",
    description: "Kill box mate",
  },
  {
    name: "killBoxMateDescription",
    description:
      "A rook is next to the enemy king and supported by a queen that also blocks the king's escape squares. The rook and the queen catch the enemy king in a 3 by 3 'kill box'.",
  },
  {
    name: "vukovicMate",
    description: "Vukovic mate",
  },
  {
    name: "vukovicMateDescription",
    description:
      "A rook and knight team up to mate the king. The rook delivers mate while supported by a third piece, and the knight is used to block the king's escape squares.",
  },
  {
    name: "knightEndgame",
    description: "Knight endgame",
  },
  {
    name: "knightEndgameDescription",
    description: "An endgame with only knights and pawns.",
  },
  {
    name: "long",
    description: "Long puzzle",
  },
  {
    name: "longDescription",
    description: "Three moves to win.",
  },
  {
    name: "master",
    description: "Master games",
  },
  {
    name: "masterDescription",
    description: "Puzzles from games played by titled players.",
  },
  {
    name: "masterVsMaster",
    description: "Master vs Master games",
  },
  {
    name: "masterVsMasterDescription",
    description: "Puzzles from games between two titled players.",
  },
  {
    name: "mate",
    description: "Checkmate",
  },
  {
    name: "mateDescription",
    description: "Win the game with style.",
  },
  {
    name: "mateIn1",
    description: "Mate in 1",
  },
  {
    name: "mateIn1Description",
    description: "Deliver checkmate in one move.",
  },
  {
    name: "mateIn2",
    description: "Mate in 2",
  },
  {
    name: "mateIn2Description",
    description: "Deliver checkmate in two moves.",
  },
  {
    name: "mateIn3",
    description: "Mate in 3",
  },
  {
    name: "mateIn3Description",
    description: "Deliver checkmate in three moves.",
  },
  {
    name: "mateIn4",
    description: "Mate in 4",
  },
  {
    name: "mateIn4Description",
    description: "Deliver checkmate in four moves.",
  },
  {
    name: "mateIn5",
    description: "Mate in 5 or more",
  },
  {
    name: "mateIn5Description",
    description: "Figure out a long mating sequence.",
  },
  {
    name: "middlegame",
    description: "Middlegame",
  },
  {
    name: "middlegameDescription",
    description: "A tactic during the second phase of the game.",
  },
  {
    name: "oneMove",
    description: "One-move puzzle",
  },
  {
    name: "oneMoveDescription",
    description: "A puzzle that is only one move long.",
  },
  {
    name: "opening",
    description: "Opening",
  },
  {
    name: "openingDescription",
    description: "A tactic during the first phase of the game.",
  },
  {
    name: "pawnEndgame",
    description: "Pawn endgame",
  },
  {
    name: "pawnEndgameDescription",
    description: "An endgame with only pawns.",
  },
  {
    name: "pin",
    description: "Pin",
  },
  {
    name: "pinDescription",
    description:
      "A tactic involving pins, where a piece is unable to move without revealing an attack on a higher value piece.",
  },
  {
    name: "promotion",
    description: "Promotion",
  },
  {
    name: "promotionDescription",
    description: "Promote one of your pawn to a queen or minor piece.",
  },
  {
    name: "queenEndgame",
    description: "Queen endgame",
  },
  {
    name: "queenEndgameDescription",
    description: "An endgame with only queens and pawns.",
  },
  {
    name: "queenRookEndgame",
    description: "Queen and Rook",
  },
  {
    name: "queenRookEndgameDescription",
    description: "An endgame with only queens, rooks and pawns.",
  },
  {
    name: "queensideAttack",
    description: "Queenside attack",
  },
  {
    name: "queensideAttackDescription",
    description:
      "An attack of the opponent's king, after they castled on the queen side.",
  },
  {
    name: "quietMove",
    description: "Quiet move",
  },
  {
    name: "quietMoveDescription",
    description:
      "A move that does neither make a check or capture, nor an immediate threat to capture, but does prepare a more hidden unavoidable threat for a later move.",
  },
  {
    name: "rookEndgame",
    description: "Rook endgame",
  },
  {
    name: "rookEndgameDescription",
    description: "An endgame with only rooks and pawns.",
  },
  {
    name: "sacrifice",
    description: "Sacrifice",
  },
  {
    name: "sacrificeDescription",
    description:
      "A tactic involving giving up material in the short-term, to gain an advantage again after a forced sequence of moves.",
  },
  {
    name: "short",
    description: "Short puzzle",
  },
  {
    name: "shortDescription",
    description: "Two moves to win.",
  },
  {
    name: "skewer",
    description: "Skewer",
  },
  {
    name: "skewerDescription",
    description:
      "A motif involving a high value piece being attacked, moving out the way, and allowing a lower value piece behind it to be captured or attacked, the inverse of a pin.",
  },
  {
    name: "smotheredMate",
    description: "Smothered mate",
  },
  {
    name: "smotheredMateDescription",
    description:
      "A checkmate delivered by a knight in which the mated king is unable to move because it is surrounded (or smothered) by its own pieces.",
  },
  {
    name: "superGM",
    description: "Super GM games",
  },
  {
    name: "superGMDescription",
    description: "Puzzles from games played by the best players in the world.",
  },
  {
    name: "trappedPiece",
    description: "Trapped piece",
  },
  {
    name: "trappedPieceDescription",
    description: "A piece is unable to escape capture as it has limited moves.",
  },
  {
    name: "underPromotion",
    description: "Underpromotion",
  },
  {
    name: "underPromotionDescription",
    description: "Promotion to a knight, bishop, or rook.",
  },
  {
    name: "veryLong",
    description: "Very long puzzle",
  },
  {
    name: "veryLongDescription",
    description: "Four moves or more to win.",
  },
  {
    name: "xRayAttack",
    description: "X-Ray attack",
  },
  {
    name: "xRayAttackDescription",
    description: "A piece attacks or defends a square, through an enemy piece.",
  },
  {
    name: "zugzwang",
    description: "Zugzwang",
  },
  {
    name: "zugzwangDescription",
    description:
      "The opponent is limited in the moves they can make, and all moves worsen their position.",
  },
  {
    name: "mix",
    description: "Healthy mix",
  },
  {
    name: "mixDescription",
    description:
      "A bit of everything. You don't know what to expect, so you remain ready for anything! Just like in real games.",
  },
  {
    name: "playerGames",
    description: "Player games",
  },
  {
    name: "playerGamesDescription",
    description:
      "Lookup puzzles generated from your games, or from another player's games.",
  },
  {
    name: "puzzleDownloadInformation",
    description:
      "These puzzles are in the public domain, and can be downloaded from %s.",
  },
];
