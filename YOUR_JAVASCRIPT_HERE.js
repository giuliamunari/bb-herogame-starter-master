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
// --------- RESTING

// rest the hero
function rest(object){
    if (object.health ===10){
        alert('You are already healthy')
    }
    object.health = 10
    return object
}

// get potion image and add behaviour
const potion = document.getElementById('inn')

potion.onclick = () => {
    rest(hero)
}
// --------- PICKING UP ITEMS

// pick up the weapon

// select the weapon
const daggerImg = document.getElementById('dagger')
// collect the weapon on click with her properties
const dagger = {
    type: 'dagger',
    damage: 2
}

daggerImg.onclick = () => {
    pickUpItem(hero, dagger)
}
// this is the action of picking up the weapon
function pickUpItem(currentHero, currentWeapon){ 
    currentHero.inventory.push(currentWeapon)
    console.log(currentHero.inventory)
}
//console.log(hero.inventory);
// --------- EQUIP WEAPON
function equipWeapon(currentHero){
    currentHero.weapon.damage = 5
    let current = currentHero.inventory[0]
    if (current !== currentHero.weapon){
        current = currentHero.weapon
    }
    
}
//equipWeapon(hero)