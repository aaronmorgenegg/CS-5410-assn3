game_data = {};

function ititialize(){
    // Initializes the textures, options, and calls gameLoop
    game_data = {
        'time':{
            'previous':performance.now(),
            'current':0,
            'elapsed':0,
            'running':0
        }
    };
    requestAnimationFrame(gameLoop);
}

function processInput(){

}

function update(){

}

function render(){
    canvas = document.getElementById('canvas_main');
    context = canvas.getContext('2d');
}

function gameLoop(){
    updateTime();

    processInput();
    update();
    render();

    // Event-based model, makes a request to the browser to loop when its ready. Allows the browser to do other things
    requestAnimationFrame(gameLoop)
}

ititialize();
