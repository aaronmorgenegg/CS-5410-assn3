function getPaddle(){
    return {'width': PADDLE_WIDTH, 'xpos':.5};
}

function shrinkPaddle(){
    game_data.paddle['width'] = PADDLE_WIDTH/2;
}

function movePaddleLeft(){
    if(game_data.paddle['xpos']>0){
        game_data.paddle['xpos'] -= 0.01;
    }
}

function movePaddleRight(){
    if(game_data.paddle['xpos']<1){
        game_data.paddle['xpos'] += 0.01;
    }
}

function renderPaddle() {
    paddle = game_data['paddle'];
    x = canvas.width*paddle.xpos - PADDLE_WIDTH/2;
    y = canvas.height - canvas.height/BRICKS_AREA;
    drawRectangle(context,
        {
            x: x,
            y: y,
            width: PADDLE_WIDTH,
            height: PADDLE_HEIGHT,
            fill: PADDLE_FILL,
            stroke: PADDLE_STROKE
        }
    );
}
