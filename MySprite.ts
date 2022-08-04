// Be than eqeq

import { Project, Sprite } from "ts/Project.ts";

export default class MySprite extends Sprite {
    constructor(define, color) {
        super(define, color)

        this.x = define[0]
        this.y = define[1]

        this.width = define[2]
        this.height = define[3]

        this.visible = define[4]

        this.color = color

        this.costumes = [new Costume("Sprite 1", "", [200, 200])]

        this.sounds = [new Sound("Audio 1", "")]

        this.triggers = [
            new Trigger(this.whenFlagStarted, 0)
        ]

    }
}