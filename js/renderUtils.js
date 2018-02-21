function drawRectangle(context, spec) {
    context.save();

    context.fillStyle = spec.fill;
    context.fillRect(spec.x, spec.y, spec.width, spec.height);

    context.strokeStyle = spec.stroke;
    context.strokeRect(spec.x, spec.y, spec.width, spec.height);

    context.restore();

}

function drawCircle(context, spec) {
    context.beginPath();

    context.strokeStyle = spec.stroke;
    context.arc(spec.x, spec.y, spec.radius, 0, 2*Math.PI);

    context.stroke();

}

function renderBackground() {
    canvas = game_data['canvas'];
    context = game_data['context'];
    // Black box background
    drawRectangle(context,
        {
            x: 0,
            y: 0,
            width: canvas.width,
            height: canvas.height,
            fill: 'rgba(55, 55, 55, 1)',
            stroke: 'rgba(0, 0, 0, 1)'
        }
    );
}

function renderScore(){
    canvas = game_data['canvas'];
    context = game_data['context'];
    context.font=SCORE_FONT;
    x = 10;
    y = canvas.height;
    context.fillStyle = SCORE_COLOR;
    context.fillText(game_data['player']['score'], x, y-5);
}

function renderLives(){
    canvas = game_data['canvas'];
    context = game_data['context'];
    x = canvas.width - PADDLE_WIDTH * game_data.player['lives'] - 50;
    y = 5;
    for(i = 0; i < game_data.player['lives']; i++) {
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
        x += PADDLE_WIDTH + 15;
    }
}
