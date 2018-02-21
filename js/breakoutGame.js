function checkEndGame(){
    // Return true if its time to end game, false to continue play
    if(game_data.player['lives'] < 0) return true;
    if(game_data.player['score'] >= MAX_POSSIBLE_SCORE) return true;

    return false;
}

function updateInput(){
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
}

function onKeyUp(e) {
    if (e.keyCode === 68 || e.keyCode === 76 || e.keyCode === 39) {
        if(game_data.player['input'] === 'r') game_data.player['input'] = '';
    }
    if (e.keyCode === 65 || e.keyCode === 74 || e.keyCode === 37) {
        if(game_data.player['input'] === 'l') game_data.player['input'] = '';
    }
}