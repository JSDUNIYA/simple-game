var character = document.getElementById("character");
var block = document.getElementById("block");
var score = document.getElementById("block");

function jump() {
    
    if(character.classList !== 'animate'){
        character.classList.add('animate');
    }
    setTimeout(function(){
        score.textContent = 0;
        character.classList.remove('animate');
    },500);
}

var checkDead  = setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft <20 && blockLeft >0 && characterTop >=150) {
        block.style.animation = "none";
        character.style.animation = "none"
        window.location.reload();
        alert('You Loose');
    }

}, 10);

document.body.onkeydown = function(e){
    if (e.keyCode == 32) {
        jump()
        console.log('Space pressed');
    }
}