import { game } from "../../main";
import { GAME_HEIGHT, GAME_WIDTH, SCENES } from "../config";
import { ASSET_PATH } from "../assetpath";
import { SceneData } from "../object/scenedata";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super(SCENES.PRELOAD);
  }

  init() {}

  preload() {
    let bg = this.add.rectangle(
      GAME_WIDTH * 0.5,
      GAME_HEIGHT * 0.5,
      GAME_WIDTH,
      GAME_HEIGHT,
      0x070707,
      1
    );

    let chessLogo = this.add.image(
      bg.x,
      bg.y - 100,
      ASSET_PATH.SPRITE.LOADING.key,
      ASSET_PATH.SPRITE.LOADING.sprite.loadingLogo
    );

    let preloadBG = this.add.image(
      chessLogo.x,
      chessLogo.y + 120,
      ASSET_PATH.SPRITE.LOADING.key,
      ASSET_PATH.SPRITE.LOADING.sprite.loadingbarbg
    );

    let preload = this.add.image(
      preloadBG.x,
      preloadBG.y,
      ASSET_PATH.SPRITE.LOADING.key,
      ASSET_PATH.SPRITE.LOADING.sprite.loadingbartop
    );

    let preloadMask = this.add.image(
      preload.x,
      preload.y,
      ASSET_PATH.SPRITE.LOADING.key,
      ASSET_PATH.SPRITE.LOADING.sprite.loadingbartop
    );
    preloadMask.setVisible(false);

    preload.mask = new Phaser.Display.Masks.BitmapMask(this, preloadMask);

    this.load.on("progress", (value: number) => {
      preloadMask.x = GAME_WIDTH * 0.5 - preload.width + value * preload.width;
    });

    this.load.image(ASSET_PATH.SPRITE.BG.key, ASSET_PATH.SPRITE.BG.path);
    this.load.image(ASSET_PATH.SPRITE.BOARD.key, ASSET_PATH.SPRITE.BOARD.path);
    this.load.image(ASSET_PATH.SPRITE.K.key, ASSET_PATH.SPRITE.K.path);
    this.load.image(ASSET_PATH.SPRITE.k.key, ASSET_PATH.SPRITE.k.path);
    this.load.image(ASSET_PATH.SPRITE.Q.key, ASSET_PATH.SPRITE.Q.path);
    this.load.image(ASSET_PATH.SPRITE.q.key, ASSET_PATH.SPRITE.q.path);
    this.load.image(ASSET_PATH.SPRITE.B.key, ASSET_PATH.SPRITE.B.path);
    this.load.image(ASSET_PATH.SPRITE.b.key, ASSET_PATH.SPRITE.b.path);
    this.load.image(ASSET_PATH.SPRITE.R.key, ASSET_PATH.SPRITE.R.path);
    this.load.image(ASSET_PATH.SPRITE.r.key, ASSET_PATH.SPRITE.r.path);
    this.load.image(ASSET_PATH.SPRITE.N.key, ASSET_PATH.SPRITE.N.path);
    this.load.image(ASSET_PATH.SPRITE.n.key, ASSET_PATH.SPRITE.n.path);
    this.load.image(ASSET_PATH.SPRITE.P.key, ASSET_PATH.SPRITE.P.path);
    this.load.image(ASSET_PATH.SPRITE.p.key, ASSET_PATH.SPRITE.p.path);
    this.load.image(
      ASSET_PATH.SPRITE.CIRCLE.key,
      ASSET_PATH.SPRITE.CIRCLE.path
    );
    this.load.image(
      ASSET_PATH.SPRITE.MENUBG.key,
      ASSET_PATH.SPRITE.MENUBG.path
    );
    this.load.image(
      ASSET_PATH.SPRITE.PLAYBTN.key,
      ASSET_PATH.SPRITE.PLAYBTN.path
    );
  }

  create() {
    let data: SceneData = { sceneTitle: "Select Game Mode" };
    this.scene.start(SCENES.GAMEMODE, data);
  }
}
