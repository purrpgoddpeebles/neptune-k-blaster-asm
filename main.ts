controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -74)
    controller.vibrate(668)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite, effects.disintegrate, 111)
    info.changeScoreBy(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 339188)
    scene.cameraShake(6, 322)
    controller.vibrate(11162)
    info.changeLifeBy(-1)
})
let mySprite2: Sprite = null
let asteroid: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect(999999999999)
mySprite = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . 8 c 6 8 f 8 . . . . 
    . . . . 8 8 8 f f f f 8 . . . . 
    . . . 8 8 8 f 8 6 f 8 8 f 8 . . 
    . 8 8 8 f 8 8 8 9 8 8 f f 8 . . 
    . 8 8 8 f f f 6 9 f f f 8 8 . . 
    . 8 f 8 f f c c 8 8 8 8 8 . . . 
    . 8 f f 8 8 6 6 6 9 8 8 . . . . 
    . 8 8 f f f c c e e f f 8 8 . . 
    . 8 f 8 8 f 8 6 6 6 6 9 6 8 8 . 
    8 8 8 8 f 8 8 8 6 6 6 9 6 6 8 8 
    8 f f f f f 8 f 6 6 6 6 9 6 8 8 
    `, SpriteKind.Player)
mySprite.setPosition(77, 111)
controller.moveSprite(mySprite, 90, 77)
mySprite.setStayInScreen(true)
music.play(music.stringPlayable("F G G B B E - C5 ", 73), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(1611, function () {
    asteroid = sprites.createProjectileFromSide(img`
        f f f f f f f f f 7 7 7 f f f f 
        f f f f f f 7 f 7 7 7 7 7 7 f f 
        f f f 7 7 7 7 f 7 7 7 7 7 7 f f 
        f f 7 7 7 7 7 f 7 7 7 7 7 f 7 7 
        7 7 7 7 7 7 7 f 7 7 7 7 f 7 7 7 
        7 7 7 7 7 7 7 f 7 7 7 f 7 7 7 7 
        7 7 7 7 7 7 7 f 7 7 f 7 7 7 7 7 
        7 7 7 7 7 7 7 f 7 f 7 7 7 7 7 7 
        7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 f 7 f 7 7 7 7 7 7 
        f 7 7 7 7 7 7 f 7 7 f 7 7 7 7 7 
        f f f 7 7 7 7 f 7 7 7 f 7 7 7 7 
        f f f 7 7 7 7 f 7 7 7 7 f 7 7 7 
        f f f 7 7 7 7 f 7 7 7 7 7 f f f 
        f f f f 7 7 7 f 7 7 7 7 7 f f f 
        f f f f f f f f f f f f f f f f 
        `, 0, 50)
    asteroid.x = randint(0, scene.screenWidth())
    asteroid.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(333, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    mySprite2.x = scene.screenWidth()
    mySprite2.setVelocity(-21, 0)
    mySprite2.y = randint(150, scene.screenHeight() - 44)
})
