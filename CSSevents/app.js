// Add an event listener to the start button, so that the cat starts moving across the screen when its clicked.
// Add an event listener to the stop button, so that the cat stops moving when clicked.
// Add an event listener to the speed button, so that the cat moves faster when it's clicked.

let movePixels = 10;
let delays = 50;
let catTimer = null; 
// the cats placement and movment, start recording th 
function catWalk(){
    let img = document.getElementsByTagName('img')[0];
    let currentLeft = parseInt(img.style.left);
    img.style.left =(currentLeft + movePixels) + 'px';
    if (currentLeft > (window.innerWidth-img.width)){
        img.style.left = '0px';
    }
}
function startCatWalk (){
    catTimer = window.setInterval(catWalk,delays);
}

function onStartClick(){
    startCatWalk();
}

let startButton= document.getElementById('start-button');
startButton.addEventListener('click', onStartClick);

function onStopClick(){
    window.clearInterval(catTimer);
}

// start butoom functionality
let stopButton = document.getElementById('stop-button')
stopButton.addEventListener('click', onStopClick);

function onSpeedClick() {
    movePixels += 2;
    // times two
    let speed= movePixels * (1000/20);
    document.getElementById('info').innerHTML= 'The Cat is Running:' + speed + 'px/second'
}

let speedButton = document.getElementById('speed-button');
speedButton.addEventListener('click', onSpeedClick);

