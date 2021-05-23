import "phaser";
import BootScene from "./scenes/bootscene";
import GameScene from "./scenes/gamescene";
import MenuScene from "./scenes/menuscene";
import PreloadScene from "./scenes/preloadscene";

export const GAME_WIDTH = 1920;
export const GAME_HEIGHT = 1080;

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: 0x000,
  scene: [BootScene, PreloadScene,MenuScene, GameScene],
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
  MENU: "Menu",
  GAME: "Game",
};
