require("./styles.css");

import { config } from "./script/config";
import FireBaseManager from "./script/util/firebaseManager";

export const firebaseManager = new FireBaseManager();
firebaseManager.Init();

export const game = new Phaser.Game(config);
