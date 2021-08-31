import { ASSET_PATH } from ".././assetpath";

export default class MenuButton extends Phaser.GameObjects.Image {
  normalFrame: string | number;
  overFrame: string | number;
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string | Phaser.Textures.Texture,
    frame: string | number,
    overFrame: string | number
  ) {
    super(scene, x, y, texture, frame);
    this.scene.add.existing(this);
    this.setInteractive();
    this.normalFrame = frame;
    this.overFrame = overFrame;
    this.on("pointerover", this.OnPointerOver);
    this.on("pointerout", this.OnPointerOut);
  }

  OnPointerOver() {
    this.setFrame(this.overFrame);
  }

  OnPointerOut() {
    this.setFrame(this.normalFrame);
  }
}
