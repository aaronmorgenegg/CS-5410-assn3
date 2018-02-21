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
    setCountdown();
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
