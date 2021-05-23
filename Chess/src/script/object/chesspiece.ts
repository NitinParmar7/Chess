import { ASSET_PATH } from "../assetpath";
import { GetTextureFromType, ROWS, TYPES } from "../data/data";

export default class ChessPiece extends Phaser.GameObjects.Image {
  type: string;
  name: string;
  FEN: string;
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    type: string,
    row: number
  ) {
    super(scene, x, y, type);
    this.name = type;
    if (type == type.toUpperCase()) {
      this.type = TYPES.WHITE;
    } else {
      this.type = TYPES.BLACK;
    }
    scene.add.existing(this);
    this.setOrigin(0.5, 0.8);
    this.setDepth(ROWS.length - row);
    this.setScale(0.5);
  }

  GetType(): string {
    return this.type;
  }

  SetFEN(fen: string){
    this.FEN = fen;
  }

  GetFEN(): string{
    return this.FEN;
  }
}
