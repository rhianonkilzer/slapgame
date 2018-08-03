let health = 100;
let hits = 0;


function punch() {
    health -= 2;
    hits++
    update()
}

function gassy() {
    health -= 13;
    hits++
    update()
}

function stabby() {
    health -= 20;
    hits++
    update()
}


function reset(){
    health = 100;
    hits = 0;
    update()
}

function update() {
    if(health < 0){
    health = 0;
    }
    document.getElementById('health').innerText = `${health}%`
    document.getElementById('health').style = `width: ${health}%`
    console.log(health)
}

update()
