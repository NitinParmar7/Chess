import { game } from "../../main";
import { GAME_HEIGHT, GAME_WIDTH, SCENES } from "../config";
import { ASSET_PATH } from "../assetpath";
import Board from "../object/board";
import { TYPES, GAMETYPE, GAME_BOARD_CONFIG } from "../data/data";
import GameEventEmitter, { GAME_EVENTS } from "../util/gameevent";


class GameMode {
  private static instance : GameMode;
  
  maxPlayer: number;
  gameType: number;

  private constructor()
  {
  }

  public static GetInstance() : GameMode
  {
    if(!GameMode.instance)
    {
      GameMode.instance = new GameMode();
    }
    return GameMode.instance;
  }

}

export default class GameScene extends Phaser.Scene {
  BG: Phaser.GameObjects.Image;
  Board: Board;
  chessGame;
  gameHasStarted: boolean = false;
  gameMode : GameMode;

  constructor() {
    super(SCENES.GAME);
  }

  init() {
    const gameEvents = [
      {
        name: GAME_EVENTS.TURN_HAS_ENDED.key,
        callback: this.SwitchTurn
      }
    ]
    gameEvents.forEach(
      (gameEvent: { name: string; callback: (...args: any[]) => void }) => {
        GameEventEmitter.GetInstance().addListener(
          gameEvent.name,
          gameEvent.callback,
          this
        );
      }
    );

    this.gameMode = GameMode.GetInstance();
  }

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

  SwitchTurn()
  {
    this.Board.boardData.boardData.turn = this.Board.boardData.boardData.turn == TYPES.WHITE ? TYPES.BLACK : TYPES.WHITE;
    if(this.Board.boardData.boardData.turn == TYPES.WHITE)
    {

    }else{
      this.Board.MoveAI();
    }
  }
}
