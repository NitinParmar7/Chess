import { ASSET_PATH } from "../assetpath";
import { GAME_HEIGHT, GAME_WIDTH, SCENES } from "../config";
import { SceneData } from "../object/scenedata";

export default class BaseScene extends Phaser.Scene {
  title: string;
  init(data: SceneData) {
    this.title = data.sceneTitle;
  }

  create() {
    let blackbg = this.add.rectangle(
      GAME_WIDTH * 0.5,
      GAME_HEIGHT * 0.5,
      GAME_WIDTH,
      GAME_HEIGHT,
      0x070707,
      1
    );

    let text = this.add
      .text(GAME_WIDTH * 0.5, GAME_HEIGHT * 0.25, this.title, {
        fontSize: "72px",
        fontStyle: "bold",
      })
      .setOrigin(0.5);

    let back = this.add
      .text(GAME_WIDTH * 0.1, GAME_HEIGHT * 0.9, "Back", {
        fontSize: "72px",
        fontStyle: "bold",
      })
      .setOrigin(0.5)
      .setInteractive()
      .on(
        "pointerdown",
        () => {
          this.scene.start(SCENES.MENU);
        },
        this
      );
  }
}
