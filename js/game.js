var canvas = document.getElementById('canvas')

var ctx = canvas.getContext('2d')

var keys = {
  left: 37,
  right: 39,
  up: 38,
  down: 40
}

var entities = []

var player = new Player()

entities.push(player)

var keysPressed = {}

window.addEventListener('keydown', function(e) {
  keysPressed[e.keyCode] = true
})

window.addEventListener('keyup', function(e) {
  delete keysPressed[e.keyCode]
})

window.addEventListener('mousedown', function(e) {
  entities.push(new Projectile())
})


function isKeyPressed(key) {
  return keysPressed[key]
}

function update() {
  for (var i = entities.length - 1; i >= 0; i--) {
    var entity = entities[i]

    entity.update()

    if (entity.health <= 0) {
      entities.splice(i, 1)
    }
  }
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function render() {
  clear()

  entities.forEach(function(entity) {
    entity.render()
  })
}

function tick() {
  update()

  render()

  requestAnimationFrame(tick)
}

tick()
