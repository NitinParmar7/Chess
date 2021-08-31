import { ASSET_PATH } from "../assetpath";
import { GAME_HEIGHT, GAME_WIDTH, SCENES } from "../config";
import MenuButton from "../object/menuButton";
import { SceneData } from "../object/scenedata";

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super(SCENES.MENU);
  }

  init() {}

  preload() {}

  create() {
    let bg = this.add.image(
      GAME_WIDTH * 0.5,
      GAME_HEIGHT * 0.5,
      ASSET_PATH.SPRITE.LOADING.key,
      ASSET_PATH.SPRITE.LOADING.sprite.bg
    );

    let playButton = new MenuButton(
      this,
      GAME_WIDTH * 0.5 + 100,
      GAME_HEIGHT * 0.5 - 80,
      ASSET_PATH.SPRITE.LOADING.key,
      ASSET_PATH.SPRITE.LOADING.sprite.play,
      ASSET_PATH.SPRITE.LOADING.sprite.playhover
    );

    playButton.on("pointerdown", this.OnPlayClicked, this);

    let leaderboard = new MenuButton(
      this,
      playButton.x,
      playButton.y + 100,
      ASSET_PATH.SPRITE.LOADING.key,
      ASSET_PATH.SPRITE.LOADING.sprite.leaderboard,
      ASSET_PATH.SPRITE.LOADING.sprite.leaderboardover
    );

    leaderboard.on(
      "pointerdown",
      () => {
        let data: SceneData = { sceneTitle: "Leaderboard" };
        this.scene.start(SCENES.LEADERBOARD, data);
      },
      this
    );

    let myaccount = new MenuButton(
      this,
      leaderboard.x,
      leaderboard.y + 100,
      ASSET_PATH.SPRITE.LOADING.key,
      ASSET_PATH.SPRITE.LOADING.sprite.myaccount,
      ASSET_PATH.SPRITE.LOADING.sprite.myaccountover
    );

    myaccount.on(
      "pointerdown",
      () => {
        let data: SceneData = { sceneTitle: "My Account" };
        this.scene.start(SCENES.ACCOUNT, data);
      },
      this
    );

    let howtoplay = new MenuButton(
      this,
      myaccount.x,
      myaccount.y + 100,
      ASSET_PATH.SPRITE.LOADING.key,
      ASSET_PATH.SPRITE.LOADING.sprite.howtoplay,
      ASSET_PATH.SPRITE.LOADING.sprite.howtoplayover
    );

    howtoplay.on(
      "pointerdown",
      () => {
        let data: SceneData = { sceneTitle: "How to play" };
        this.scene.start(SCENES.HOWTO, data);
      },
      this
    );
  }

  OnPlayClicked() {
    let data: SceneData = { sceneTitle: "Select Game Mode" };
    this.scene.start(SCENES.GAMEMODE, data);
  }
}
