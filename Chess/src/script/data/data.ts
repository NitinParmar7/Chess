export const COLUMNS = ["A", "B", "C", "D", "E", "F", "G", "H"];
export const ROWS = ["1", "2", "3", "4", "5", "6", "7", "8"];

export const TYPES = {
  BLACK: "black",
  WHITE: "white",
};

export const AITYPE = {
  Monkey: 0,
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
};

export const SETTINGS = {
  aiLevel: AITYPE.Monkey,
  sound: true,
};

export const GAME_BOARD_CONFIG = {
  turn: TYPES.WHITE,
  pieces: [
    { location: "E1", piece: "K" },
    { location: "D1", piece: "Q" },
    { location: "A1", piece: "R" },
    { location: "H1", piece: "R" },
    { location: "C1", piece: "B" },
    { location: "F1", piece: "B" },
    { location: "B1", piece: "N" },
    { location: "G1", piece: "N" },
    { location: "A2", piece: "P" },
    { location: "B2", piece: "P" },
    { location: "C2", piece: "P" },
    { location: "D2", piece: "P" },
    { location: "E2", piece: "P" },
    { location: "F2", piece: "P" },
    { location: "G2", piece: "P" },
    { location: "H2", piece: "P" },
    { location: "E8", piece: "k" },
    { location: "D8", piece: "q" },
    { location: "A8", piece: "r" },
    { location: "H8", piece: "r" },
    { location: "C8", piece: "b" },
    { location: "F8", piece: "b" },
    { location: "B8", piece: "n" },
    { location: "G8", piece: "n" },
    { location: "A7", piece: "p" },
    { location: "B7", piece: "p" },
    { location: "C7", piece: "p" },
    { location: "D7", piece: "p" },
    { location: "E7", piece: "p" },
    { location: "F7", piece: "p" },
    { location: "G7", piece: "p" },
    { location: "H7", piece: "p" },
  ],
  moves: {},
  move: {},
  history: [],
  isFinished: false,
  checkMate: false,
  castling: {
    whiteShort: true,
    blackShort: true,
    whiteLong: true,
    blackLong: true,
  },
  fullMove: 1,
  halfMove: 0,
};

export const DEBUG = true;

export default class Debug {
  static Log(...data: any[]) {
    if (DEBUG) {
      console.log(data);
    }
  }
}

export function GetTextureFromType(type: string): string {
  if (type == type.toUpperCase()) {
    return type + "_W.png";
  } else {
    return type + "_B.png";
  }
}
