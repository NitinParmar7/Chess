import "phaser";
import AccountScene from "./scenes/accountscene";
import BootScene from "./scenes/bootscene";
import GameMode from "./scenes/gamemodescene";
import GameScene from "./scenes/gamescene";
import HowToScene from "./scenes/howtoscene";
import LeaderboardScene from "./scenes/leaderboardscene";
import MenuScene from "./scenes/menuscene";
import PreloadScene from "./scenes/preloadscene";
import SplashScene from "./scenes/splashScene";

export const GAME_WIDTH = 1920;
export const GAME_HEIGHT = 1080;

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: 0x000,
  scene: [
    BootScene,
    PreloadScene,
    SplashScene,
    MenuScene,
    GameScene,
    LeaderboardScene,
    AccountScene,
    HowToScene,
    GameMode,
  ],
  parent: "game",
  dom: {
    createContainer: true,
  },
  scale: {
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    mode: Phaser.Scale.FIT,
    autoRound: true,
    autoCenter: Phaser.Scale.Center.CENTER_BOTH,
  },
};

export const SCENES = {
  BOOT: "Boot",
  PRELOAD: "Preload",
  SPLASH: "Splash",
  MENU: "Menu",
  GAME: "Game",
  LEADERBOARD: "Leaderboard",
  ACCOUNT: "Account",
  HOWTO: "HowTo",
  GAMEMODE: "GameMode",
};
