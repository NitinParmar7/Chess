import { ASSET_PATH } from "../assetpath";
import { GAME_HEIGHT, GAME_WIDTH, SCENES } from "../config";
import BaseScene from "./basescene";

export default class leaderboardScene extends BaseScene {
  constructor() {
    super(SCENES.LEADERBOARD);
  }
}
