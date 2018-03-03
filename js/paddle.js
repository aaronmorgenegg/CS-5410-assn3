function getPaddle(){
    return {'width': PADDLE_WIDTH, 'xpos':.5, 'ypos':1 - 1/BRICKS_AREA};
}

function shrinkPaddle(){
    game_data.paddle['width'] = PADDLE_WIDTH/2;
}

function movePaddleLeft(){
    game_data.paddle['xpos'] -= PADDLE_SPEED * game_data.time['elapsed'];
    if(game_data.paddle['xpos'] < game_data.paddle['width']/game_data.canvas.width/2){
        game_data.paddle['xpos'] = game_data.paddle['width']/game_data.canvas.width/2;
    }
}

function movePaddleRight(){
    game_data.paddle['xpos'] += PADDLE_SPEED * game_data.time['elapsed'];
    if(game_data.paddle['xpos']> 1 - game_data.paddle['width']/game_data.canvas.width/2){
        game_data.paddle['xpos'] = 1 - game_data.paddle['width']/game_data.canvas.width/2;
    }
}

function renderPaddle() {
    canvas = game_data['canvas'];
    context = game_data['context'];
    paddle = game_data['paddle'];
    x = canvas.width*paddle.xpos - paddle['width']/2;
    y = canvas.height*paddle.ypos - PADDLE_HEIGHT/2;
    drawRectangle(context,
        {
            x: x,
            y: y,
            width: paddle['width'],
            height: PADDLE_HEIGHT,
            fill: PADDLE_FILL,
            stroke: PADDLE_STROKE
        }
    );
}
