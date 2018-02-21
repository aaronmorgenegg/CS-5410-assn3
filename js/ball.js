function getBall(){
    return {'xpos':.5, 'ypos':.98-1/BRICKS_AREA, 'xvel':-BALL_SPEED/2, 'yvel':-BALL_SPEED};
}

function renderBall(ball) {
    canvas = game_data['canvas'];
    context = game_data['context'];
    x = canvas.width*ball.xpos - BALL_SIZE/2;
    y = canvas.height*ball.ypos - BALL_SIZE/2;
    drawCircle(context,
        {
            x: x,
            y: y,
            radius: BALL_SIZE,
            stroke: BALL_STROKE
        }
    );
}

function handleWallCollision(ball){
    if(ball['xpos'] <= 0.01 || ball['xpos'] >= .99) {
        ball['xvel'] *= -1;
    }
    if(ball['ypos'] <= 0.01 || ball['ypos'] >= .99) {
        ball['yvel'] *= -1;
    }
}

function handlePaddleCollision(ball){

}

function handleBrickCollision(ball){

}

function moveBall(ball){
    ball['xpos'] += ball.xvel * game_data.time['elapsed'] * game_data.state['ball_speed_mult'];
    ball['ypos'] += ball.yvel * game_data.time['elapsed'] * game_data.state['ball_speed_mult'];
    handleWallCollision(ball);
    handlePaddleCollision(ball);
    handleBrickCollision(ball);
}

function moveBalls(){
    for(i = 0; i < game_data['balls'].length; i++){
        moveBall(game_data['balls'][i]);
    }
}

function renderBalls(){
    for(i = 0; i < game_data['balls'].length; i++){
        renderBall(game_data['balls'][i]);
    }
}
