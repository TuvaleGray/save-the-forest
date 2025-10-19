sprites.on_fire_created(function (location) {
    scene.createParticleEffectAtLocation(location, effects.fire)
    sprites.set_flame_strength(location, 5)
})
sprites.on_fire_destroyed(function (location) {
    scene.clearParticleEffectsAtLocation(location)
    tiles.setTileAt(location, assets.tile`burnt tree`)
})
scene.onOverlapTile(SpriteKind.Water, assets.tile`tree fire`, function (sprite, location) {
    sprites.change_flame_strength_by(location, -1)
    sprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    sprites.spray(myPlane, forest_imgs.water)
})
let myPlane: Sprite = null
game.set_dryness_of_grass(7)
myPlane = sprites.create(assets.image`asset name`, SpriteKind.Player)
controller.moveSprite(myPlane)
scene.cameraFollowSprite(myPlane)
for (let index = 0; index < 4; index++) {
    sprites.create_spreading_fire(assets.tile`tree`, assets.tile`tree fire`)
}
game.set_health_of_trees(7)
hud.fire_hud(true)
hud.danger_hud(true)
hud.forest_hud(true)
game.onUpdate(function () {
    sprites.random_spread()
})
