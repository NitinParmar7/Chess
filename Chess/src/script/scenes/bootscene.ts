import { game } from "../../main";
import { ASSET_PATH } from "../assetpath";
import { SCENES } from "../config";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super(SCENES.BOOT);
  }

  init() {}

  preload() {
    this.load.multiatlas(
      ASSET_PATH.SPRITE.LOADING.key,
      ASSET_PATH.SPRITE.LOADING.path,
      "assets/sprites"
    );
  }

  create() {
    this.scene.start(SCENES.PRELOAD);
  }
}
