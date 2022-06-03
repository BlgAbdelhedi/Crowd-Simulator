import Dudes from './dudes'
import './assets/styles/index.scss';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let numberOfParticles = 250;
let particlesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function init() {
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Dudes(canvas));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(canvas, ctx);
    }
    requestAnimationFrame(animate);
}
init();
animate();

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesArray = [];
    init();
})

