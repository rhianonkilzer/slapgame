var health = 100;

function punch(){
    health -= 1;
    console.log(health)
}

punch()


function gassy(){
    health -=15;
    console.log(health)
}

gassy()


function stabby(){
    health -= 20;
    console.log(health)
}
gassy()

document.getElementById(health)