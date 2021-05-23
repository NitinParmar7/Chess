import { ASSET_PATH } from "../assetpath";
import { GAME_HEIGHT, GAME_WIDTH, SCENES } from "../config";

export default class MenuScene extends Phaser.Scene
{
    constructor()
    {
        super(SCENES.MENU);
    }

    init(){}

    preload(){}

    create(){

        let bg = this.add.image(GAME_WIDTH * 0.5, GAME_HEIGHT * 0.5, ASSET_PATH.SPRITE.MENUBG.key);
        let playBtn = this.add.image(bg.x + 200, bg.y + 300, ASSET_PATH.SPRITE.PLAYBTN.key).setInteractive().on('pointerdown', ()=>{
            this.scene.start(SCENES.GAME);
        }, this);

    }
}