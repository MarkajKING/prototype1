import * as PIXI from 'pixi.js'
import { Game } from './game'


export class Brandaan extends PIXI.AnimatedSprite {
    private game: Game
    private xSpeed: number = 0
    private ySpeed: number = 0
    private frames: PIXI.Texture[][] = []
    private previousFrame: number = -1

    constructor(game: Game, textures: PIXI.Texture[][], x: number, y: number) {
        super(textures[0])
        this.game = game
        this.frames = textures

        this.x = x
        this.y = y
        this.anchor.set(0.5)
        this.scale.set(3)
        this.animationSpeed = 0.1;
        this.loop = true
        this.play();

        this.game.pixi.stage.addChild(this);

    }

    public update(delta: number): void {
        super.update(delta)
        this.x += this.xSpeed * delta
        this.y += this.ySpeed * delta
    }

}
