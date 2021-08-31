import { ASSET_PATH } from "../assetpath";
import { GAME_HEIGHT, GAME_WIDTH, SCENES } from "../config";

export default class SplashScene extends Phaser.Scene {
  constructor() {
    super(SCENES.SPLASH);
  }

  create() {
    let bg = this.add.rectangle(
      GAME_WIDTH * 0.5,
      GAME_HEIGHT * 0.5,
      GAME_WIDTH,
      GAME_HEIGHT,
      0x070707,
      1
    );
    let logo = this.add
      .image(
        GAME_WIDTH * 0.5,
        GAME_HEIGHT * 0.5,
        ASSET_PATH.SPRITE.LOADING.key,
        ASSET_PATH.SPRITE.LOADING.sprite.splashLogo
      )
      .setAlpha(0);

    this.add.tween({
      targets: logo,
      alpha: 1,
      duration: 2000,
      yoyo: true,
      onComplete: this.OnTweenFinished,
      onCompleteScope: this,
    });
  }

  OnTweenFinished() {
    this.scene.start(SCENES.MENU);
  }
}
