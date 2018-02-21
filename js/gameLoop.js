game_data = {};

function ititialize(){
    // Initializes the textures, options, and calls gameLoop
    canvas = document.getElementById('canvas_main');
    context = canvas.getContext('2d');
    game_data = {
        'time':{
            'previous':performance.now(),
            'current':0,
            'elapsed':0,
            'running':0,
            'countdown': 3000
        },
        'player': {
            'score': 0,
            'lives': 3,
            'input': ''
        },
        'options':{
            'paused': true
        },
        'state': {
            'bricks_removed': 0,
            'ball_speed_mult': 1
        },
        'bricks': getBricksGrid(),
        'paddle': getPaddle(),
        'balls': [getBall()],
        'canvas': canvas,
        'context': context
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    requestAnimationFrame(gameLoop);
}

function processInput(){

}

function update(){
    updateCountdown();
    if(!game_data.options['paused']) {
        updateMovement();
        moveBalls(); // TODO: change to updateballs, wrap moveballs in it
    }
}

function render(){
    renderBackground();
    renderCountdown();
    renderScore();
    renderLives();
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
