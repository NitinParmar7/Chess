import { ASSET_PATH } from "../assetpath";
import { GAME_HEIGHT, GAME_WIDTH, SCENES } from "../config";
import BaseScene from "./basescene";

export default class AccountScene extends BaseScene {
  constructor() {
    super(SCENES.ACCOUNT);
  }
}
