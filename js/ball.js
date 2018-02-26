function getBall(){
    return {'xpos':.5, 'ypos':.98-1/BRICKS_AREA, 'xvel':-BALL_SPEED/2, 'yvel':-BALL_SPEED};
}

function handleWallCollision(i){
    if(game_data.balls[i]['ypos'] >= .995){
        delete game_data.balls[i];
    }
    else if(game_data.balls[i]['xpos'] <= 0.005 || game_data.balls[i]['xpos'] >= .995) {
        game_data.balls[i]['xvel'] *= -1;
    }
    else if(game_data.balls[i]['ypos'] <= 0.005) {
        game_data.balls[i]['yvel'] *= -1;
    }
}

function handlePaddleCollision(i){
    if(game_data.balls[i] === undefined) return;
    paddle = game_data.paddle;
    paddle_min_x = paddle['xpos']-(paddle['width']/game_data['canvas'].width)/2;
    paddle_max_x = paddle['xpos']+(paddle['width']/game_data['canvas'].width)/2;
    if(Math.abs(game_data.balls[i]['ypos']-paddle['ypos']) <= 0.01 &&
       Math.abs(game_data.balls[i]['xpos']>=paddle_min_x) &&
       Math.abs(game_data.balls[i]['xpos']<=paddle_max_x) &&
       game_data.balls[i]['yvel']>=0)
    {
        game_data.balls[i]['yvel'] *= -1;
        // TODO: handle xvel reflection angle
    }
}

function handleBrickCollision(i){
    if(game_data.balls[i] === undefined) return;
    brick_step_x = 1/BRICKS_GRID_WIDTH;
    brick_step_y = 1/BRICKS_GRID_HEIGHT/BRICKS_AREA;
    brick_min_y = 1/BRICKS_AREA;
    brick_max_y = 2/BRICKS_AREA;
    if(game_data.balls[i]['ypos']>= brick_min_y && game_data.balls[i]['ypos'] <= brick_max_y){
        brick_x = Math.floor(game_data.balls[i]['xpos']/brick_step_x);
        brick_y = Math.floor(game_data.balls[i]['ypos']/brick_step_y);
        hitBrick(i, brick_x, brick_y);
    }
}

function hitBrick(i, brick_x, brick_y){
    if(game_data.bricks[brick_x][brick_y] !== undefined) {
        game_data.balls[i]['yvel'] *= -1;
        game_data.player['score'] += game_data.bricks[brick_x][brick_y];
        game_data.bricks[brick_x][brick_y] = undefined;
    }
}

function moveBall(i){
    game_data.balls[i]['xpos'] += game_data.balls[i].xvel * game_data.time['elapsed'] * game_data.state['ball_speed_mult'];
    game_data.balls[i]['ypos'] += game_data.balls[i].yvel * game_data.time['elapsed'] * game_data.state['ball_speed_mult'];
    handleWallCollision(i);
    handlePaddleCollision(i);
    handleBrickCollision(i);
}

function moveBalls(){
    for(i = 0; i < game_data['balls'].length; i++){
        moveBall(i);
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
