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
    game_data.options['menu'] = true;
}

function exitMenu(){
    game_data.options['menu'] = false;
    setCountdown();
}

function highScoresButton(){
    game_data.options['high_scores'] = true;
}

function renderHighScores(){
    x = canvas.width/2;
    y = canvas.height/3;
    context.font=MENU_FONT;
    context.textAlign="center";
    context.fillStyle = MENU_FONT_COLOR;
    context.fillText("High Scores", x, y);
    for(i = 0; i < game_data.high_scores.length; i++){
        y += 50;
        context.font=MENU_FONT;
        context.textAlign="center";
        context.fillStyle = MENU_FONT_COLOR;
        context.fillText(game_data.high_scores[i], x, y);
    }
}

function creditsButton(){
    game_data.options['credits'] = true;
}

function renderCredits(){
    context.font=MENU_FONT;
    context.textAlign="center";
    x = canvas.width/2;
    y = canvas.height/2;
    context.fillStyle = MENU_FONT_COLOR;
    context.fillText("Created by Aaron Morgenegg", x, y);
}

function exitMenuButton(){
    exitMenu();
}

function onMouseClick(){
    x = event.x - game_data.canvas.offsetLeft;
    y = event.y - game_data.canvas.offsetTop;

    button_min_x = canvas.width/2 - 125;
    button_max_x = button_min_x + 250;

    if(mouseInRange(x, y, button_min_x, button_max_x, 350, 400)){ // high scores button
        highScoresButton();
    } else if(mouseInRange(x, y, button_min_x, button_max_x, 450, 500)){ // credits button
        creditsButton();
    } else if(mouseInRange(x, y, button_min_x, button_max_x, 550, 600)){ // exit menu button
        exitMenuButton();
    }
}

function mouseInRange(x, y, min_x, max_x, min_y, max_y){
    if(x >= min_x && x <= max_x && y >= min_y && y <= max_y){
        return true;
    }
    return false;
}

function renderCountdown(){
    countdown = Math.ceil(game_data.time['countdown']/1000);
    if(countdown > 0) {
        canvas = game_data['canvas'];
        context = game_data['context'];
        context.font=COUNTDOWN_FONT;
        context.textAlign = 'center';
        x = canvas.width/2;
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
    context.textAlign="center";
    x = canvas.width/2;
    y += 35;
    context.fillStyle = MENU_FONT_COLOR;
    context.fillText(spec.msg, x, y);

}

function renderMenu(){
    renderMenuButton({msg:'High Scores', y:350});
    renderMenuButton({msg:'Credits', y:450});
    renderMenuButton({msg:'Exit Menu', y:550});
}
