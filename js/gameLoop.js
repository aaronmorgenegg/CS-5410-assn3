game_data = {};

function ititialize(){
    // Initializes the textures, options, and calls gameLoop
    game_data = {
        'time':{
            'previous':performance.now(),
            'current':0,
            'elapsed':0,
            'running':0
        },
        'player': {
            'score': 0,
            'lives': 3,
            'input': ''
        },
        'bricks': getBricksGrid(),
        'paddle': getPaddle(),
        'balls': [getBall()]
    };

    document.addEventListener('keydown', onKeyDown);

    requestAnimationFrame(gameLoop);
}

function processInput(){

}

function update(){
    updateInput();
}

function render(){
    canvas = document.getElementById('canvas_main');
    context = canvas.getContext('2d');

    renderBackground();
    renderScore();
    renderBalls();
    renderBricks();
    renderPaddle();
}

function gameLoop(){
    updateTime();

    processInput();
    update();
    render();

    // Event-based model, makes a request to the browser to loop when its ready. Allows the browser to do other things
    if(!checkEndGame()) requestAnimationFrame(gameLoop)
}

ititialize();
