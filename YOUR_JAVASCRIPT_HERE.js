// Write your JS here
const hero = {
    name: 'Clio',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'sword',
        damage: 2
    }
}
// --------- RESTING
let healthOfHero = hero.health
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
    displayStats(healthOfHero)
   
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
    
}

// --------- EQUIP WEAPON
const bag = document.getElementById('bag')
bag.onclick = () => {
    hero.weapon = hero.inventory[0]
    
}
function equipWeapon(currentHero){
    // check if there are items in the bag so we are sure there are default values
    if (currentHero.inventory[0] !== undefined){
        
        currentHero.inventory[0] = currentHero.weapon
        return currentHero.inventory[0]
    }
    
}
//------- implementing fighting an enemy
const enemy = {
    name: 'Dangerous Enemy',
    health: 10,
    damage: 3
}
const enemyImage = document.getElementById('enemy')

// reduce hero health

enemyImage.onclick = () => {
    
    hero.health -= enemy.damage
    enemy.health -= hero.weapon.damage
    
    displayStats(hero.health)
    displayEnemy(enemy.health)
    if(enemy.health ===0){
        /*
        alert('you win!!!')
        enemyImage.style.display = 'none'
        */
    }
    if(hero.health<=0){
        alert('you are dead')
        containerStatus.innerHTML = `${heroName} died`
        potion.style.display = 'none'
    }
    
}

function displayStats(health){
    const containerStatus = document.getElementById('displayStats')
    let heroName = hero.name
    const inputField = document.getElementById('newName')
    if (inputField.value){
        heroName = inputField.value
        inputField.value = ''
    }
    containerStatus.innerHTML = 
    `Name: ${heroName},
    <br>
    Health: ${health},
    <br>
    Weapon: ${hero.weapon.type},
    <br>
    Damage: ${hero.weapon.damage},`
    
  
   
}

const status = document.getElementById('status')
function displayEnemy(enemyHealth){
    
    status.innerHTML = `Name: ${enemy.name}, Health: ${enemyHealth}`
    
}


displayStats(healthOfHero)
displayEnemy(enemy.health)