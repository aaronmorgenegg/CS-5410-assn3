function checkEndGame(){
    // Return true if its time to end game, false to continue play
    if(game_data.player['lives'] < 0) return true;
    if(game_data.player['score'] >= MAX_POSSIBLE_SCORE) return true;

    return false;
}