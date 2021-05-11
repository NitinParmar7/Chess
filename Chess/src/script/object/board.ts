import { ASSET_PATH } from "../assetpath";
import { GAME_HEIGHT, GAME_WIDTH } from "../config";
import Debug, { COLUMNS, DEBUG, ROWS, GAME_BOARD_CONFIG } from "../data/data";
import ChessPiece from "./chesspiece";
import GameScene from "../scenes/gamescene";
import GameEventEmitter, { GAME_EVENTS } from "../util/gameevent";
import { Game, move, status, moves, aiMove, getFen } from 'js-chess-engine'
//import jsChessEngine = require('js-chess-engine');

class BoardElementPosition {
  column: string;
  row: string;
  file: number;
  position: Phaser.Math.Vector2;
  board: Board;
  FEN: string;
  circle: Phaser.GameObjects.Arc;
  chesspiece: ChessPiece;
  constructor(
    columnToSet: string,
    rowToSet: string,
    positionToSet: Phaser.Math.Vector2,
    boardToSet: Board
  ) {
    this.column = columnToSet;
    this.row = rowToSet;
    this.file = COLUMNS.indexOf(columnToSet);
    this.position = positionToSet;
    this.board = boardToSet;
    this.FEN = this.column + this.row;
    this.circle = this.board.scene.add.circle(
      this.position.x,
      this.position.y,
      10,
      0xff0000,
      1
    );
    this.circle.setVisible(false);
    this.board.boardData.boardElements.push(this);
  }

  AssignChessPiece(piece: ChessPiece) {
    this.chesspiece = piece;
  }

  RemoveChessPiece() {
    this.chesspiece = null;
  }
}
class BoardData {
  boardData = GAME_BOARD_CONFIG;
  boardElements: BoardElementPosition[];
  constructor() {
    this.boardElements = [];
  }

  getElement(chessLocation: string): BoardElementPosition {
    return this.boardElements.find((object) => object.FEN == chessLocation);
  }
  getBoardLocation(chessLocation: string): Phaser.Math.Vector2 {
    return this.boardElements.find((object) => object.FEN == chessLocation)
      .position;
  }

  getBoardColumn(chessLocation: string): string {
    return this.boardElements.find((object) => object.FEN == chessLocation)
      .column;
  }

  getBoardRow(chessLocation: string): string {
    return this.boardElements.find((object) => object.FEN == chessLocation).row;
  }
}

export default class Board extends Phaser.GameObjects.GameObject {
  board!: Phaser.GameObjects.Image;
  boardData!: BoardData;
  boardOffsetY: number = 100;
  gameScene: GameScene;
  gameHasStarted: boolean;
  chessGame : any;

  constructor(scene: Phaser.Scene, type: string) {
    super(scene, type);
    this.name = type;
    scene.add.existing(this);
    this.gameScene = <GameScene>scene;
  }

  init() {
    this.BindGameEvents();
    this.board = this.scene.add.image(
      GAME_WIDTH * 0.5,
      GAME_HEIGHT * 0.5 + this.boardOffsetY,
      ASSET_PATH.SPRITE.BOARD.key
    );
    this.board.setVisible(true);
    this.InitBoardData();
    this.InitPieces();
    this.chessGame = new Game();
  }

  BindGameEvents() {
    const gameEvents = [
      {
        name: GAME_EVENTS.GAME_HAS_STARTED.key,
        callback: this.OnGameHasStarted,
      },
    ];
    gameEvents.forEach(
      (gameEvent: { name: string; callback: (...args: any[]) => void }) => {
        GameEventEmitter.GetInstance().addListener(
          gameEvent.name,
          gameEvent.callback,
          this
        );
      }
    );
  }

  OnGameHasStarted() {
    this.gameHasStarted = true;
  }

  InitBoardData() {
    this.boardData = new BoardData();
    let RowHeights = [
      GAME_HEIGHT * 0.76 + this.boardOffsetY,
      GAME_HEIGHT * 0.65 + this.boardOffsetY,
      GAME_HEIGHT * 0.54 + this.boardOffsetY,
      GAME_HEIGHT * 0.44 + this.boardOffsetY,
      GAME_HEIGHT * 0.35 + this.boardOffsetY,
      GAME_HEIGHT * 0.26 + this.boardOffsetY,
      GAME_HEIGHT * 0.18 + this.boardOffsetY,
      GAME_HEIGHT * 0.1 + this.boardOffsetY,
    ];
    let row = 0;
    let boardA1 = new BoardElementPosition(
      COLUMNS[0],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.235, RowHeights[row]),
      this
    );
    let boardB1 = new BoardElementPosition(
      COLUMNS[1],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.315, RowHeights[row]),
      this
    );
    let boardC1 = new BoardElementPosition(
      COLUMNS[2],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.385, RowHeights[row]),
      this
    );
    let boardD1 = new BoardElementPosition(
      COLUMNS[3],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.46, RowHeights[row]),
      this
    );
    let boardE1 = new BoardElementPosition(
      COLUMNS[4],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.5325, RowHeights[row]),
      this
    );
    let boardF1 = new BoardElementPosition(
      COLUMNS[5],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.605, RowHeights[row]),
      this
    );
    let boardG1 = new BoardElementPosition(
      COLUMNS[6],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.68, RowHeights[row]),
      this
    );
    let boardH1 = new BoardElementPosition(
      COLUMNS[7],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.755, RowHeights[row]),
      this
    );
    //////////////////////////////////////////////////////////////////////
    ++row;
    let boardA2 = new BoardElementPosition(
      COLUMNS[0],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.245, RowHeights[row]),
      this
    );
    let boardB2 = new BoardElementPosition(
      COLUMNS[1],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.32, RowHeights[row]),
      this
    );
    let boardC2 = new BoardElementPosition(
      COLUMNS[2],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.39, RowHeights[row]),
      this
    );
    let boardD2 = new BoardElementPosition(
      COLUMNS[3],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.46, RowHeights[row]),
      this
    );
    let boardE2 = new BoardElementPosition(
      COLUMNS[4],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.53, RowHeights[row]),
      this
    );
    let boardF2 = new BoardElementPosition(
      COLUMNS[5],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.6, RowHeights[row]),
      this
    );
    let boardG2 = new BoardElementPosition(
      COLUMNS[6],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.67, RowHeights[row]),
      this
    );
    let boardH2 = new BoardElementPosition(
      COLUMNS[7],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.74, RowHeights[row]),
      this
    );
    //////////////////////////////////////////////////////////////////////
    ++row;
    let boardA3 = new BoardElementPosition(
      COLUMNS[0],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.255, RowHeights[row]),
      this
    );
    let boardB3 = new BoardElementPosition(
      COLUMNS[1],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.325, RowHeights[row]),
      this
    );
    let boardC3 = new BoardElementPosition(
      COLUMNS[2],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.395, RowHeights[row]),
      this
    );
    let boardD3 = new BoardElementPosition(
      COLUMNS[3],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.46, RowHeights[row]),
      this
    );
    let boardE3 = new BoardElementPosition(
      COLUMNS[4],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.5275, RowHeights[row]),
      this
    );
    let boardF3 = new BoardElementPosition(
      COLUMNS[5],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.595, RowHeights[row]),
      this
    );
    let boardG3 = new BoardElementPosition(
      COLUMNS[6],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.6625, RowHeights[row]),
      this
    );
    let boardH3 = new BoardElementPosition(
      COLUMNS[7],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.73, RowHeights[row]),
      this
    );
    //////////////////////////////////////////////////////////////////////
    ++row;
    let boardA4 = new BoardElementPosition(
      COLUMNS[0],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.265, RowHeights[row]),
      this
    );
    let boardB4 = new BoardElementPosition(
      COLUMNS[1],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.33, RowHeights[row]),
      this
    );
    let boardC4 = new BoardElementPosition(
      COLUMNS[2],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.4, RowHeights[row]),
      this
    );
    let boardD4 = new BoardElementPosition(
      COLUMNS[3],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.4625, RowHeights[row]),
      this
    );
    let boardE4 = new BoardElementPosition(
      COLUMNS[4],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.5275, RowHeights[row]),
      this
    );
    let boardF4 = new BoardElementPosition(
      COLUMNS[5],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.59, RowHeights[row]),
      this
    );
    let boardG4 = new BoardElementPosition(
      COLUMNS[6],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.6575, RowHeights[row]),
      this
    );
    let boardH4 = new BoardElementPosition(
      COLUMNS[7],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.72, RowHeights[row]),
      this
    );
    //////////////////////////////////////////////////////////////////////
    ++row;
    let boardA5 = new BoardElementPosition(
      COLUMNS[0],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.27, RowHeights[row]),
      this
    );
    let boardB5 = new BoardElementPosition(
      COLUMNS[1],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.335, RowHeights[row]),
      this
    );
    let boardC5 = new BoardElementPosition(
      COLUMNS[2],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.4025, RowHeights[row]),
      this
    );
    let boardD5 = new BoardElementPosition(
      COLUMNS[3],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.4625, RowHeights[row]),
      this
    );
    let boardE5 = new BoardElementPosition(
      COLUMNS[4],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.5275, RowHeights[row]),
      this
    );
    let boardF5 = new BoardElementPosition(
      COLUMNS[5],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.5895, RowHeights[row]),
      this
    );
    let boardG5 = new BoardElementPosition(
      COLUMNS[6],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.65, RowHeights[row]),
      this
    );
    let boardH5 = new BoardElementPosition(
      COLUMNS[7],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.715, RowHeights[row]),
      this
    );
    //////////////////////////////////////////////////////////////////////
    ++row;
    let boardA6 = new BoardElementPosition(
      COLUMNS[0],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.28, RowHeights[row]),
      this
    );
    let boardB6 = new BoardElementPosition(
      COLUMNS[1],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.34, RowHeights[row]),
      this
    );
    let boardC6 = new BoardElementPosition(
      COLUMNS[2],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.405, RowHeights[row]),
      this
    );
    let boardD6 = new BoardElementPosition(
      COLUMNS[3],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.465, RowHeights[row]),
      this
    );
    let boardE6 = new BoardElementPosition(
      COLUMNS[4],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.525, RowHeights[row]),
      this
    );
    let boardF6 = new BoardElementPosition(
      COLUMNS[5],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.585, RowHeights[row]),
      this
    );
    let boardG6 = new BoardElementPosition(
      COLUMNS[6],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.645, RowHeights[row]),
      this
    );
    let boardH6 = new BoardElementPosition(
      COLUMNS[7],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.705, RowHeights[row]),
      this
    );
    //////////////////////////////////////////////////////////////////////
    ++row;
    let boardA7 = new BoardElementPosition(
      COLUMNS[0],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.29, RowHeights[row]),
      this
    );
    let boardB7 = new BoardElementPosition(
      COLUMNS[1],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.345, RowHeights[row]),
      this
    );
    let boardC7 = new BoardElementPosition(
      COLUMNS[2],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.4075, RowHeights[row]),
      this
    );
    let boardD7 = new BoardElementPosition(
      COLUMNS[3],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.465, RowHeights[row]),
      this
    );
    let boardE7 = new BoardElementPosition(
      COLUMNS[4],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.525, RowHeights[row]),
      this
    );
    let boardF7 = new BoardElementPosition(
      COLUMNS[5],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.5825, RowHeights[row]),
      this
    );
    let boardG7 = new BoardElementPosition(
      COLUMNS[6],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.64, RowHeights[row]),
      this
    );
    let boardH7 = new BoardElementPosition(
      COLUMNS[7],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.7, RowHeights[row]),
      this
    );
    //////////////////////////////////////////////////////////////////////
    ++row;
    let boardA8 = new BoardElementPosition(
      COLUMNS[0],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.295, RowHeights[row]),
      this
    );
    let boardB8 = new BoardElementPosition(
      COLUMNS[1],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.35, RowHeights[row]),
      this
    );
    let boardC8 = new BoardElementPosition(
      COLUMNS[2],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.41, RowHeights[row]),
      this
    );
    let boardD8 = new BoardElementPosition(
      COLUMNS[3],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.465, RowHeights[row]),
      this
    );
    let boardE8 = new BoardElementPosition(
      COLUMNS[4],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.525, RowHeights[row]),
      this
    );
    let boardF8 = new BoardElementPosition(
      COLUMNS[5],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.58, RowHeights[row]),
      this
    );
    let boardG8 = new BoardElementPosition(
      COLUMNS[6],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.635, RowHeights[row]),
      this
    );
    let boardH8 = new BoardElementPosition(
      COLUMNS[7],
      ROWS[row],
      new Phaser.Math.Vector2(GAME_WIDTH * 0.6925, RowHeights[row]),
      this
    );
  }

  InitPieces() {
    for (let i = 0; i < this.boardData.boardData.pieces.length; ++i) {
      let data = this.boardData.boardData.pieces[i];
      let element = this.boardData.getElement(data.location);
      let position = element.position;
      let piece = new ChessPiece(
        this.scene,
        position.x,
        position.y,
        data.piece,
        parseInt(element.row)
      );
      element.AssignChessPiece(piece);
      piece.setInteractive().on(
        "pointerdown",
        () => {
          this.OnChessPieceSelected(element, piece);
        },
        this
      );
    }
  }

  OnChessPieceSelected(element: BoardElementPosition, piece: ChessPiece) {
    if (this.gameHasStarted) {
      // Debug.Log(
      //   this.ChessGame.getMoves({
      //     file: element.file,
      //     rank: parseInt(element.row),
      //   })
      // );
      // let row = (parseInt(element.row));
      // let Moves: Move[] = this.ChessGame.getMoves({
      //   file: element.file,
      //   rank: row,
      // });

      // console.log(Moves);

      // Moves.forEach((Move) => {
      //    let chessLocation  = COLUMNS[Move.to.file] + "" + ROWS[Move.to.rank];
      //    let Element = this.boardData.getElement(chessLocation);
      //    Element.circle.setVisible(true);
      // });
    }
  }
}
