const clouds = document.querySelector('.clouds')
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

function restart() {
    pipe.style.animation = 'pipe-animation 2s infinite linear';
    pipe.style.left = 'auto';
    
    mario.style.bottom = '0 '
    mario.src = 'src/img/mario.gif';
    mario.style.width = '150px';
    mario.style.marginLeft = '0';

    clouds.style.animation = 'clouds-animation 10s infinite linear';
    clouds.style.left = 'auto'

}

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    const cloudsPosition = clouds.offsetLeft;

    if (pipePosition <= 150 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = pipePosition + "px";

        mario.style.bottom = marioPosition + "px";
        mario.src = 'src/img/mario-gameover.gif';
        mario.style.width = '75px';
        mario.style.marginLeft = '75px';

        clouds.style.animation = 'none';
        clouds.style.left = cloudsPosition + 'px';


    }

}, 10)

document.addEventListener('keydown', jump);