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
            fill: BALL_FILL,
            stroke: BALL_STROKE
        }
    );
}

function moveBall(ball){
    ball['xpos'] += ball.xvel * game_data.time['elapsed'] * game_data.state['ball_speed_mult'];
    ball['ypos'] += ball.yvel * game_data.time['elapsed'] * game_data.state['ball_speed_mult'];
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
