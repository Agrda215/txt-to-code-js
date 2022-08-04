export default class Project {
    constructor(width, height, fps) {
        this.projecting = 2

        this.width = width
        this.height = height

        this.fps = fps

        let up = false

        let down = true

        this.everyone = false
    }
}

// Arrays:
/*
  0 and 1: This position
  2: At Be Width size.
  3: At Be Height Size
  4: Visible boolean.
*/
export default class Sprite {
    constructor(define, color) {
        this.x = define[0]
        this.y = define[1]

        this.width = define[2]
        this.height = define[3]

        this.visible = define[4]

        this.color = color
    }
}

export default class Costume {
    constructor(title, url, positions) {
        this.title = title

        this.url = () => {
            let img = new Image()
            img.src = url
            return img
        }

        this.x = positions[0]
        this.y = positions[0]
    }
}

export default class Sound {
    constructor(title, url) {
        this.title = title
        this.url = () => {
            let sound = new Audio(url)
            return sound
        }
    }
}

export default class Trigger {
    constructor(varName, id) {
        this.var = varName
        this.id = id
    }
}