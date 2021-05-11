import { game } from "../main";
import { GAME_HEIGHT, GAME_WIDTH, SCENES } from "../config";
import { ASSET_PATH } from "../assetpath";
import Board from "../object/board";
import { TYPES } from "../data/data";
import GameEventEmitter, { GAME_EVENTS } from "../util/gameevent";

export default class GameScene extends Phaser.Scene {
  BG: Phaser.GameObjects.Image;
  Board: Board;
  chessGame;
  gameHasStarted: boolean = false;

  constructor() {
    super(SCENES.GAME);
  }

  init() {}

  preload() {}

  create() {
    this.BG = this.add.image(
      GAME_WIDTH * 0.5,
      GAME_HEIGHT * 0.5,
      ASSET_PATH.SPRITE.BG.key
    );

    this.Board = new Board(this, "board");
    this.Board.init();
    this.StartGame();
  }

  StartGame() {
    this.Board.boardData.boardData.turn = TYPES.WHITE;
    this.gameHasStarted = true;
    GameEventEmitter.GetInstance().emit(GAME_EVENTS.GAME_HAS_STARTED.key);
  }
}
