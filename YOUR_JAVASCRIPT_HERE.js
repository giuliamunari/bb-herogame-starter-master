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
    if(enemy.health === 0){
        //console.log('win')
        win()
    }
    if(hero.health <= 0){
        //console.log('died')
        gameOver()
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
function newImage(imgUrl, buttonReload){
    const mainContainer = document.getElementById('main')
    //create an image
    const imageEnd = document.createElement('img')
    mainContainer.innerHTML = ''
    
    imageEnd.src = imgUrl
    // create a button
    const button = document.createElement('button')
    button.classList.add('buttonRestart')
    button.onclick = () => {
        location.reload()
    } 
    button.innerHTML = buttonReload
    mainContainer.appendChild(button)
    mainContainer.appendChild(imageEnd)
    
    
}
function gameOver(){
    console.log('died')
   const imageOver = 'https://cdn.weasyl.com/static/media/b3/a0/55/b3a055bf9382268a362d5d408a83268e55257be11b1f3216182c00cfddb5bb69.gif'
    const text = 'Try again'
   newImage(imageOver, text)
}
function win(){
    console.log('win')
    const imgWin = 'https://media.giphy.com/media/l49JCSwMXyxHnYJws/giphy.gif'
    const text = 'Congratulations! start a new game'
    newImage(imgWin, text)
    
}

displayStats(healthOfHero)
displayEnemy(enemy.health)