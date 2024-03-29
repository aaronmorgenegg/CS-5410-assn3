game_data = {};

function initialize(){
    // Initializes the textures, options, and calls gameLoop
    canvas = document.getElementById('canvas_main');
    context = canvas.getContext('2d');
    background = document.getElementById("img-background");
    game_data = {
        'time':{
            'previous':performance.now(),
            'current':0,
            'elapsed':0,
            'running':0,
            'countdown': 0
        },
        'player': {
            'score': 0,
            'lives': 3,
            'input': ''
        },
        'options':{
            'paused': true,
            'menu': true,
            'credits': false,
            'high_scores': false
        },
        'state': {
            'bricks_removed': 0,
            'ball_speed_mult': 1,
            'game_over': false
        },
        'textures':{
            'background': background
        },
        'bricks': getBricksGrid(),
        'paddle': getPaddle(),
        'balls': [getBall()],
        'canvas': canvas,
        'context': context,
        'particles': [],
        'high_scores': loadHighScores()
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    document.addEventListener("mousedown", onMouseClick, false);

    requestAnimationFrame(gameLoop);
}

function processInput(){

}

function update(){
    updateParticles();
    game_data.state['game_over'] = checkEndGame();
    if(!game_data.state['game_over']) {
        if (!game_data.options['menu']) {
            updateCountdown();
        }
        if (!game_data.options['paused']) {
            updateMovement();
            updateBalls();
            updateLife();
        }
    }
}

function render(){
    renderBackground();
    renderParticles();
    if(game_data.options['credits']){
        renderCredits();
    } else if(game_data.options['high_scores']) {
        renderHighScores();
    } else if(game_data.options['menu']) {
        renderMenu();
    } else {
        if(!game_data.state['game_over']) renderCountdown();
        renderScore();
        renderLives();
        renderBalls();
        renderBricks();
        renderPaddle();
        if(game_data.state['game_over']) renderGameOver();
    }
}

function gameLoop(){
    updateTime();

    processInput();
    update();
    render();

    // Event-based model, makes a request to the browser to loop when its ready. Allows the browser to do other things
    requestAnimationFrame(gameLoop);
}

initialize();
