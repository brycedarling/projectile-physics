class Player extends Entity {
  constructor() {
    var options = {
      x: 100,
      y: 100,
      height: 50,
      width: 50,
      velocity: {
        x: 0,
        y: 0
      },
      acceleration: {
        x: 2,
        y: 5
      },
      gravity: {
        x: 0,
        y: 4
      },
      friction: {
        x: 1,
        y: 1
      }
    }

    super(options)

    this.color = 'blue'
  }

  update() {
    this.velocity.x = 0
    this.velocity.y = 0

    if (isKeyPressed(keys.left)) {
      this.velocity.x -= 1
    }
    if (isKeyPressed(keys.right)) {
      this.velocity.x += 1
    }
    if (isKeyPressed(keys.up)) {
      this.velocity.y -= 1
    }
    if (isKeyPressed(keys.down)) {
      this.velocity.y += 1
    }

    this.enforceBoundaries()

    super.update()
  }

  enforceBoundaries() {
    if (this.x + this.width > canvas.width) {
      this.x = canvas.width - this.width
    }

    if (this.x < 0) {
      this.x = 0
    }

    if (this.y < 0) {
      this.y = 0
    }

    if (this.y + this.height > canvas.height) {
      this.y = canvas.height - this.height
    }
  }
}
