var health = 100;

function punch(){
    health -= 2;
    console.log(health)
}

punch()


function gassy(){
    health -=13;
    console.log(health)
}

gassy()


function stabby(){
    health -= 20;
    console.log(health)
}
gassy()

document.getElementById('health')