function checkEndGame(){
    // Return true if its time to end game, false to continue play
    if(game_data.player['lives'] < 0) return true;
    if(game_data.player['score'] >= MAX_POSSIBLE_SCORE) return true;

    return false;
}

function updateMovement(){
    input = game_data.player['input'];
    if(input==='l'){
        movePaddleLeft();
    } else if(input==='r'){
        movePaddleRight();
    }
}

function onKeyDown(e) {
    if (e.keyCode === 68 || e.keyCode === 76 || e.keyCode === 39) {
        game_data.player['input'] = 'r';
    }
    if (e.keyCode === 65 || e.keyCode === 74 || e.keyCode === 37) {
        game_data.player['input'] = 'l';
    }
    if (e.keyCode === 27) {
        game_data.options['credits'] = false;
        game_data.options['high_scores'] = false;
        enterMenu();
    }
}

function onKeyUp(e) {
    if (e.keyCode === 68 || e.keyCode === 76 || e.keyCode === 39) {
        if(game_data.player['input'] === 'r') game_data.player['input'] = '';
    }
    if (e.keyCode === 65 || e.keyCode === 74 || e.keyCode === 37) {
        if(game_data.player['input'] === 'l') game_data.player['input'] = '';
    }
}

function updateLife(){
    if(game_data['balls'].length === 0){
        resetLife();
    }
}

function resetLife(){
    game_data.player['lives'] -= 1;

    game_data['paddle'] = getPaddle();
    game_data['balls'] = [getBall()];
    game_data.options['paused'] = true;
    game_data.state['bricks_removed'] = 0;
    game_data.state['ball_speed_mult'] = 1;
    setCountdown();
}

function gameOver(){
    renderGameOver();
    saveHighScores();
}

function loadHighScores(){
    high_scores = localStorage['high_scores'];
    if(high_scores !== undefined){
        return JSON.parse(high_scores);
    } else{
        return [];
    }
}

function saveHighScores(){
    game_data['high_scores'].push(game_data.player['score']);
    game_data['high_scores'].sort(function(a, b){return b - a});
    game_data['high_scores'] = game_data['high_scores'].slice(0, 5);
    localStorage['high_scores'] = JSON.stringify(game_data['high_scores']);
}
