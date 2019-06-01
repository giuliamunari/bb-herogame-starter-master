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

// rest the hero
function rest(object) {
    if (object.health === 10) {
        alert('You are already healthy')
    }
    object.health = 10
    return object
}

// get potion image and add behaviour
const potion = document.getElementById('inn')

potion.onclick = () => {
    rest(hero)
    displayStats(hero.health)
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
function pickUpItem(currentHero, currentWeapon) {
    currentHero.inventory.push(currentWeapon)
}

// --------- EQUIP WEAPON
const bag = document.getElementById('bag')
    bag.onclick = () => {
    hero.weapon = hero.inventory[0]
    displayStats(hero.health)
}
function equipWeapon(currentHero) {
    // check if there are items in the bag so we are sure there are default values
    if (currentHero.inventory[0] !== undefined) {
        currentHero.weapon = currentHero.inventory[0]
    }
}
//------- implementing fighting an enemy
const enemy = {
    name: 'Dangerous Enemy',
    health: 10,
    damage: 3
}
const enemyImage = document.getElementById('enemy')

enemyImage.onclick = () => {
    // reduce health during the fight
    hero.health -= enemy.damage
    enemy.health -= hero.weapon.damage
    displayStats(hero.health)
    displayEnemy(enemy.health)
    if (enemy.health === 0) {
        win()
    }
    if (hero.health <= 0) {
        gameOver()
    }
}
// interact wirh the form and update the status on the container
function displayStats(health) {
    const containerStatus = document.getElementById('displayStats')
    const inputField = document.getElementById('newName')
    // removes text from the input
    if (inputField.value) {
        hero.name = inputField.value
        inputField.value = ''
    }
    containerStatus.innerHTML =
    `Name: ${hero.name},
    <br>
    Health: ${health},
    <br>
    Weapon: ${hero.weapon.type},
    <br>
    Damage: ${hero.weapon.damage},`
}

// display enemy status
const status = document.getElementById('status')

function displayEnemy(enemyHealth) {
    status.innerHTML = `Name: ${enemy.name}, Health: ${enemyHealth}`
}
// ---------- end of game styles
function newImage(imgUrl, buttonReload) {
    const mainContainer = document.getElementById('main')
    //create an image
    const imageEnd = document.createElement('img')
    mainContainer.innerHTML = ''
    imageEnd.src = imgUrl
    // create a button
    const button = document.createElement('button')
    button.classList.add('buttonRestart')
    button.onclick = () => location.reload() // it reloads the page
    button.innerHTML = buttonReload //adds text to the button
    // appends children
    mainContainer.appendChild(button) 
    mainContainer.appendChild(imageEnd)
}
// if you are defeated
function gameOver() {
    const imageOver = 'https://cdn.weasyl.com/static/media/b3/a0/55/b3a055bf9382268a362d5d408a83268e55257be11b1f3216182c00cfddb5bb69.gif'
    const text = 'Try again'
    newImage(imageOver, text)
}
// if you win
function win() {
    const imgWin = 'https://media.giphy.com/media/l49JCSwMXyxHnYJws/giphy.gif'
    const text = 'Congratulations! start a new game'
    newImage(imgWin, text)

}

displayStats(hero.health)
displayEnemy(enemy.health)
equipWeapon(hero)