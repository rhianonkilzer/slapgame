let zombie = {
    health: 100,
    maxHealth: 100,
    hits: 0,
    items: []
}

let availableItems = {
    shield: {
        name: 'half damage',
        modifier: .50,
        description: 'does half the damage'
    },
    brains: {
        name: 'adds health',
        modifier: 0,
        description: 'yummmm'
    },
    dodge: {
        name: 'dodge',
        modifier: 1,
        description: 'dodges an attack'
    }
}

function punch() {
    zombie.health -= 3 * addMods();
    zombie.hits++
    update()
}

function gassy() {
    zombie.health -= 13 * addMods();
    zombie.hits++
    update()
}

function stabby() {
    zombie.health -= 20 * addMods();
    zombie.hits++
    update()
}

function addMods() {
    let totalMods = 1
    for(let index = 0; index < zombie.items.length; index++){
        let item = zombie.items[index]
        totalMods -= item.modifier
    }
    if(totalMods < 0){
        totalMods = 0;
    }
    zombie.items = []
    return totalMods
}
 

function shield() {
    zombie.items.push(availableItems.shield)
}

function dodge() {
    zombie.items.push(availableItems.dodge)


}

function brains() {
    zombie.items.push(availableItems.brains)
    zombie.health += 10;
    update()
}

function reset() {
    zombie.health = 100;
    zombie.hits = 0;
    update()
}

function update() {
    if (zombie.health > zombie.maxHealth) {
        zombie.health = 100;
    }
    if (zombie.health < 0) {
        zombie.health = 0;
    }
    document.getElementById('hits').innerText = `${zombie.hits}`
    document.getElementById('health').innerText = `${zombie.health}%`
    document.getElementById('health').style = `width: ${zombie.health}%`
    console.log(zombie.health)
}

update()
