import { game } from "../main";
import { SCENES } from "../config";
import { ASSET_PATH } from "../assetpath";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super(SCENES.PRELOAD);
  }

  init() {}

  preload() {
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
    this.load.image(ASSET_PATH.SPRITE.CIRCLE.key, ASSET_PATH.SPRITE.CIRCLE.path);
  }

  create() {
    this.scene.start(SCENES.GAME);
  }
}
