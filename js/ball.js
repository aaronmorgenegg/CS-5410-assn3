function getBall(){
    return {'xpos':.5, 'ypos':.98-1/BRICKS_AREA, 'xvel':-BALL_SPEED/2, 'yvel':-BALL_SPEED};
}

function handleWallCollision(ball){
    if(ball['ypos'] >= .995){
        delete ball;
    }
    if(ball['xpos'] <= 0.005 || ball['xpos'] >= .995) {
        ball['xvel'] *= -1;
    }
    if(ball['ypos'] <= 0.005) {
        ball['yvel'] *= -1;
    }
}

function handlePaddleCollision(ball){
    paddle = game_data.paddle;
    paddle_min_x = paddle['xpos']-(paddle['width']/game_data['canvas'].width)/2;
    paddle_max_x = paddle['xpos']+(paddle['width']/game_data['canvas'].width)/2;
    if(Math.abs(ball['ypos']-paddle['ypos']) <= 0.01 &&
       Math.abs(ball['xpos']>=paddle_min_x) &&
       Math.abs(ball['xpos']<=paddle_max_x) &&
       ball['yvel']>=0)
    {
        ball['yvel'] *= -1;
        // TODO: handle xvel reflection angle
    }
}

function handleBrickCollision(ball){
    brick_step_x = 1/BRICKS_GRID_WIDTH;
    brick_step_y = 1/(BRICKS_GRID_HEIGHT/BRICKS_AREA);
    brick_min_y = 1/BRICKS_AREA;
    brick_max_y = 2/BRICKS_AREA;
    if(ball['ypos']>= brick_min_y && ball['ypos'] <= brick_max_y){
        brick_x = Math.floor(ball['xpos']/brick_step_x);
        brick_y = Math.floor(ball['ypos']/brick_step_y);
        hitBrick(game_data.bricks[brick_y][brick_x]);
    }
}

function hitBrick(brick){
        ball['yvel'] *= -1;
        game_data['score']
        brick = undefined;
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

function updateBalls(){
    moveBalls();
    game_data['balls'] = game_data['balls'].filter(function(n){ return n !== undefined });
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
            fill: BALL_FILL,
            stroke: BALL_STROKE
        }
    );
}

function renderBalls(){
    for(i = 0; i < game_data['balls'].length; i++){
        renderBall(game_data['balls'][i]);
    }
}
