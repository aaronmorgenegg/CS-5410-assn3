function getBall(){
    if(game_data.paddle !== undefined) xpos = game_data.paddle['xpos'];
    else xpos = .5;
    return {'xpos':xpos, 'ypos':.98-1/BRICKS_AREA, 'xvel':-BALL_SPEED/2, 'yvel':-BALL_SPEED};
}

function handleWallCollision(i){
    if(game_data.balls[i]['ypos'] >= .995){
        delete game_data.balls[i];
    }
    else if(game_data.balls[i]['xpos'] <= 0.005) {
        game_data.balls[i]['xpos'] = 0.005;
        game_data.balls[i]['xvel'] *= -1;
    }
    else if(game_data.balls[i]['xpos'] >= .995){
        game_data.balls[i]['xpos'] = 0.995;
        game_data.balls[i]['xvel'] *= -1;
    }
    else if(game_data.balls[i]['ypos'] <= 0.005) {
        game_data.balls[i]['ypos'] = 0.005;
        game_data.balls[i]['yvel'] *= -1;
    }
}

function getReflectionAngle(ball_x){
    value = ball_x - game_data.paddle['xpos'];
    value = value/(game_data.paddle['width']/(2*game_data.canvas.width));
    value = BALL_SPEED * value;
    return value;
}

function handlePaddleCollision(i){
    paddle = game_data.paddle;
    paddle_min_x = paddle['xpos']-(paddle['width']/game_data['canvas'].width)/2;
    paddle_max_x = paddle['xpos']+(paddle['width']/game_data['canvas'].width)/2;
    if(Math.abs(game_data.balls[i]['ypos']-paddle['ypos']) <= 0.015 &&
       Math.abs(game_data.balls[i]['xpos']>=paddle_min_x) &&
       Math.abs(game_data.balls[i]['xpos']<=paddle_max_x) &&
       game_data.balls[i]['yvel']>=0)
    {
        game_data.balls[i]['yvel'] *= -1;
        game_data.balls[i]['xvel'] = getReflectionAngle(game_data.balls[i]['xpos']);
    }
}

function getBrickY(ball_y){
    for(i = 0; i < BRICKS_GRID_HEIGHT; i++){
        rel_pos = (1+i/BRICKS_GRID_HEIGHT)/BRICKS_AREA;
        if(ball_y < rel_pos){
            return i-1;
        }
    }
    return BRICKS_GRID_HEIGHT-1;
}

function handleBrickCollision(i){
    brick_step_x = 1/BRICKS_GRID_WIDTH;
    brick_step_y = 1/BRICKS_GRID_HEIGHT;
    brick_min_y = 1/BRICKS_AREA;
    brick_max_y = 2/BRICKS_AREA;
    if(game_data.balls[i]['ypos']>= brick_min_y && game_data.balls[i]['ypos'] <= brick_max_y){
        brick_x = Math.floor(game_data.balls[i]['xpos']/brick_step_x);
        brick_y = getBrickY(game_data.balls[i]['ypos']);
        hitBrick(i, brick_x, brick_y);
    }
}

function updateExtraBalls(score, brick){
    if(score % 100 > (score+brick) % 100){
        game_data.balls.push(getBall());
    }
}

function hitBrick(i, brick_x, brick_y){
    if(game_data.bricks[brick_y][brick_x] !== undefined) {
        game_data.balls[i]['yvel'] *= -1;
        updateExtraBalls(game_data.player['score'], game_data.bricks[brick_y][brick_x]);
        game_data.player['score'] += game_data.bricks[brick_y][brick_x];
        game_data.state['bricks_removed'] += 1;
        if(brick_y <= 0) shrinkPaddle();
        particularize(brick_y, brick_x);
        game_data.bricks[brick_y][brick_x] = undefined;
    }
}

function moveBall(i){
    game_data.balls[i]['xpos'] += game_data.balls[i].xvel * game_data.time['elapsed'] * game_data.state['ball_speed_mult'];
    game_data.balls[i]['ypos'] += game_data.balls[i].yvel * game_data.time['elapsed'] * game_data.state['ball_speed_mult'];
    handlePaddleCollision(i);
    handleBrickCollision(i);
    handleWallCollision(i);
}

function moveBalls(){
    for(i = 0; i < game_data['balls'].length; i++){
        moveBall(i);
    }
}

function updateBallSpeedMult(){
    if(game_data.state['bricks_removed'] === 4) game_data.state['ball_speed_mult'] = 1.5;
    if(game_data.state['bricks_removed'] === 12) game_data.state['ball_speed_mult'] = 2;
    if(game_data.state['bricks_removed'] === 36) game_data.state['ball_speed_mult'] = 2.5;
    if(game_data.state['bricks_removed'] === 62) game_data.state['ball_speed_mult'] = 3;
}

function updateNumberOfBalls(){
    game_data['balls'] = game_data['balls'].filter(function(n){ return n !== undefined });
}

function updateBalls(){
    moveBalls();
    updateNumberOfBalls();
    updateBallSpeedMult();
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
