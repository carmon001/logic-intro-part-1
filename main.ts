function _49ers () {
    _49ers()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
let extra_velocity = 0
let _49ers2: Sprite = null
let spaceship = sprites.create(img`
. . . . . . 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 f 1 f f f 1 1 . . . . 
. . . . . 1 f 1 1 1 1 f f 1 . . . . 
. . . . . 1 f 1 1 1 1 1 f 1 1 . . . 
. . . . 1 1 f 1 1 1 1 1 f f 1 . . . 
. . . . 1 f 1 1 1 1 1 1 1 f 1 . . . 
. . . . 1 f 1 f f f f 1 1 f 1 . . . 
. . . 1 1 f f f 9 9 f 1 1 f 1 . . . 
. . . 1 f 1 f f f f f 1 1 f 1 . . . 
. . . 1 f 1 1 1 1 1 1 1 1 f 1 1 . . 
. . . 1 f 1 1 1 1 1 1 1 1 1 f 1 . . 
. . . 1 f 1 1 1 1 f f f f 1 f 1 . . 
. . . 1 f f 1 1 f 2 2 2 f f f 1 1 . 
. . . 1 f f f f 2 4 4 4 2 4 f f 1 . 
. . . 1 1 1 5 4 4 4 4 4 4 4 5 1 1 . 
. . . . . 1 5 5 5 4 2 5 5 5 5 1 . . 
. . . . . 1 1 1 5 5 5 1 1 1 1 1 . . 
. . . . . . . 1 1 1 1 1 . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(spaceship)
spaceship.x = 8
spaceship.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
// score
game.onUpdateInterval(2000, function () {
	
})
// 49eres
game.onUpdateInterval(2000, function () {
    _49ers2 = sprites.create(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 2 2 2 5 4 4 
4 4 2 5 4 4 2 5 4 2 2 4 2 2 5 4 
4 2 2 5 4 4 2 5 4 2 4 4 2 2 5 4 
4 2 5 4 4 2 2 5 2 2 4 2 2 2 5 4 
2 2 5 4 2 2 5 4 2 2 2 2 2 2 5 4 
2 2 2 2 2 2 5 4 4 2 2 2 2 5 4 4 
4 4 4 4 4 2 5 4 4 4 2 2 5 4 4 4 
4 4 4 4 2 2 5 4 4 2 2 5 5 4 4 4 
4 4 4 4 2 5 4 4 4 2 5 4 4 4 4 4 
4 4 4 4 2 5 4 4 2 5 4 4 4 4 4 4 
4 4 4 4 2 2 5 4 2 2 2 5 4 4 4 4 
4 4 4 4 4 4 4 4 4 2 2 5 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.Enemy)
    _49ers2.setPosition(scene.screenWidth(), Math.randomRange(0, scene.screenHeight()))
    extra_velocity = 0
    if (true) {
        extra_velocity = Math.randomRange(0, 50)
    } else {
        extra_velocity = Math.randomRange(-16, 16)
    }
    extra_velocity.vx = -50 - (5 - info.score()) - extra_velocity
    if (info.score() < 20) {
        controller.moveSprite(extra_velocity, 100 * (2 - info.score()), 100 * (2 - info.score()))
    }
})
