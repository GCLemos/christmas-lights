const coloredBalls = document.getElementsByClassName('colored-balls')
const play = document.getElementById('on')
const stop = document.getElementById('off')

const submit = document.getElementById('submit')
const title = document.getElementById('title')

var lenght = coloredBalls.length;

const on = function() {
    for (var i = 0; i < lenght; i++) {
        coloredBalls[i].removeAttribute("style");
        coloredBalls[i].style.animationPlayState = "running";
        coloredBalls[i].style.WebkitAnimationPlayState = "running";
    }
}

const off = function() {
    for (var i = 0; i < lenght; i++) {
        coloredBalls[i].style.animation = "none";
        coloredBalls[i].style.background = "#563260";
        coloredBalls[i].style.boxShadow = "#563260" + " 0 0 2rem 1rem";
    }
}

function alterSpeed() {
    var speed = document.getElementById('quantity').value;
    for (var i = 0; i < lenght; i++) {
      coloredBalls[i].style.animationDuration = speed + "s";
    }
}


play.addEventListener('click', on);
stop.addEventListener('click', off);