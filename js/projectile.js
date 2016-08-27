class Projectile extends Entity {
  constructor() {
    var options = {
      x: canvas.width - 10,
      y: 100,
      height: 10,
      width: 10,
      velocity: {
        x: 1,
        y: 0
      },
      acceleration: {
        x: -2,
        y: 0
      },
      gravity: {
        x: 0,
        y: 0.5
      },
      friction: {
        x: 0,
        y: 0
      }
    }

    super(options)

    this.damage = 10
  }

  update() {
    var self = this;
    entities.forEach(function(entity) {
      if (entity != self) {
        if (entity.isCollidingWith(self)) {
          entity.health -= self.damage
          self.health = 0
          console.log('hit entity', entity.health)
        }
      }
    })

    this.enforceBoundaries()

    super.update()
  }

  enforceBoundaries() {
    if ((this.x + this.width > canvas.width) ||
      (this.x < 0) ||
      (this.y < 0) ||
      (this.y + this.height > canvas.height)) {
      this.health = 0
    }
  }
}
