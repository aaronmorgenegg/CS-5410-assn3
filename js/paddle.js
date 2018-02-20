function getPaddle(){
    return {'width': PADDLE_WIDTH};
}

function shrinkPaddle(){
    game_data.paddle['width'] = PADDLE_WIDTH/2;
}
