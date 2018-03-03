function setCountdown(){
    // unpauses the game after a 3 second countdown
    game_data.time['countdown'] = 3000;
}

function updateCountdown(){
    if(game_data.time['countdown'] === 0) {
        game_data.options['paused'] = false;
    }
}

function enterMenu(){
    game_data.options['paused'] = true;
}

function renderCountdown(){
    countdown = Math.ceil(game_data.time['countdown']/1000);
    if(countdown > 0) {
        canvas = game_data['canvas'];
        context = game_data['context'];
        context.font=COUNTDOWN_FONT;
        x = canvas.width/2 - 50;
        y = canvas.height/2;
        context.fillStyle = COUNTDOWN_COLOR;
        context.fillText(countdown, x, y);
    }
}

function renderMenuButton(spec){
    canvas = game_data['canvas'];
    context = game_data['context'];

    x = canvas.width/2 - 125;
    y = spec.y;

    drawRectangle(context,
        {
            x: x,
            y: y,
            width: 250,
            height: 50,
            fill: MENU_BUTTON_FILL,
            stroke: MENU_BUTTON_STROKE
        }
    );

    context.font=MENU_FONT;
    x = canvas.width/2 - (spec.msg.length*5) - 25;
    y += 35;
    context.fillStyle = MENU_FONT_COLOR;
    context.fillText(spec.msg, x, y);

}

function renderMenu(){
    renderMenuButton({msg:'Resume', y:300});
    renderMenuButton({msg:'High Scores', y:400});
}
