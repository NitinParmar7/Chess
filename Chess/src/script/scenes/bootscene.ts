import { game } from "../../main";
import { SCENES } from "../config";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super(SCENES.BOOT);
  }

  init() {}

  preload() {}

  create() {
    this.scene.start(SCENES.PRELOAD);
  }
}
