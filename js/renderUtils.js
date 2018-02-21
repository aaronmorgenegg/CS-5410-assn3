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

    context.fillStyle = spec.fill;
    context.arc(spec.x, spec.y, spec.radius, 0, 2*Math.PI);

    context.strokeStyle = spec.stroke;
    context.arc(spec.x, spec.y, spec.radius, 0, 2*Math.PI);

    context.stroke();

}

function renderBackground() {
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
    context.font=SCORE_FONT;
    x = 10;
    y = canvas.height;
    drawRectangle(context, {'x':0,'y':y-30,'width':100,'height':30,
                             'stroke':UI_BACKDROP_COLOR, 'fill':UI_BACKDROP_COLOR});
    context.fillText(game_data['player']['score'], x, y-5);
}

