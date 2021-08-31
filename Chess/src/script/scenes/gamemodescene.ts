import { firebaseManager, game } from "../../main";
import { GAME_HEIGHT, GAME_WIDTH, SCENES } from "../config";
import FireBaseManager from "../util/firebaseManager";
import BaseScene from "./basescene";

export default class GameMode extends BaseScene {
  vsBot: Phaser.GameObjects.Text;
  vsPlayer: Phaser.GameObjects.Text;
  username: Phaser.GameObjects.DOMElement;
  constructor() {
    super(SCENES.GAMEMODE);
  }

  create() {
    super.create();
    this.vsBot = this.add
      .text(GAME_WIDTH * 0.5, GAME_HEIGHT * 0.4, "Player vs AI", {
        fontSize: "48px",
        fontStyle: "bold",
      })
      .setOrigin(0.5)
      .on(
        "pointerdown",
        () => {
          this.scene.start(SCENES.GAME);
        },
        this
      );

    this.username = this.add.dom(GAME_WIDTH * 0.5, GAME_HEIGHT * 0.5, "input").setOrigin(0.5);
    let element: HTMLInputElement = <HTMLInputElement>this.username.node;
    let style = element.style;
    style.width = "200px";
    style.height = "50px";
    element.placeholder = "enter username";

    this.vsPlayer = this.add
      .text(GAME_WIDTH * 0.5, GAME_HEIGHT * 0.6, "Player vs Player", {
        fontSize: "48px",
        fontStyle: "bold",
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", this.OnPVPClicked, this);

    firebaseManager.InitMatchmaking();
  }

  OnPVPClicked() {
    let element: HTMLInputElement = <HTMLInputElement>this.username.node;
    let username = element.value;
    this.JoinQueue(username);
  }

  JoinQueue(playerId: string) {
    let ref = firebaseManager.database.ref("matchmaking/" + playerId);
    ref.set("placeholder", (a: Error) => {
      if (a === null) {
        ref.on("value", (dataSnapshot, dataString) => {
          let gameId = dataSnapshot.val();
          let gameInfo = firebaseManager.database.ref("games/" + gameId);
          gameInfo.on("value", (gameDataSnapShot) => {
            console.log(gameDataSnapShot.val());
          });
        });
      }
    });
  }
}
