// Write your JS here
const hero = {
    name: 'my hero',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'sword',
        damage: 2
    }
}
function rest(object){
    if (object.health ===10){
        alert('You are already healthy')
    }
    object.health = 10
    return object;
}
function pickUpItem(){

}
function equipWeapon(){

}