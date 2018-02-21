function getBricksGrid(){
    // Returns grid of bricks, where each brick is represented by
    // either their score value, or undefined meaning it is gone.
    grid = [];

    for(i = 0; i < BRICKS_GRID_HEIGHT; i++){
        row = [];
        for(j = 0; j < BRICKS_GRID_WIDTH; j++){
            if(i < BRICKS_GRID_HEIGHT*.25){
                row.push(GREEN_BRICK);
            } else if(i < BRICKS_GRID_HEIGHT*.5){
                row.push(BLUE_BRICK);
            } else if(i < BRICKS_GRID_HEIGHT*.75){
                row.push(ORANGE_BRICK);
            } else {
                row.push(YELLOW_BRICK);
            }
        }
        grid.push(row);
    }
    return grid;
}

function getBrickColor(brick){
    // returns color of brick based on its score
    if(brick === YELLOW_BRICK) return YELLOW_COLOR;
    if(brick === ORANGE_BRICK) return ORANGE_COLOR;
    if(brick === BLUE_BRICK) return BLUE_COLOR;
    if(brick === GREEN_BRICK) return GREEN_COLOR;
}

function renderBrick(x, y, color){
    canvas = game_data['canvas'];
    context = game_data['context'];
    offset = 4;
    drawRectangle(context,
        {
            x: x+(offset/2),
            y: y+(offset/2),
            width: canvas.width/BRICKS_GRID_WIDTH - offset,
            height: canvas.height/BRICKS_GRID_HEIGHT/BRICKS_AREA - offset,
            fill: color,
            stroke: 'rgba(55, 55, 55, 1)'
        }
    );
}

function renderBricks(){
    canvas = game_data['canvas'];
    context = game_data['context'];
    bricks = game_data['bricks'];
    x = 0;
    y = canvas.height/BRICKS_AREA;
    brick_width = canvas.width/BRICKS_GRID_WIDTH;
    brick_height = canvas.height/BRICKS_GRID_HEIGHT/BRICKS_AREA;
    for(i = 0; i < BRICKS_GRID_HEIGHT; i++){
        for(j = 0; j < BRICKS_GRID_WIDTH; j++){
            if(bricks[i][j] !== undefined){
                color = getBrickColor(bricks[i][j]);
                renderBrick(x, y, color);
            }
            x += brick_width;
        }
        x = 0;
        y += brick_height;
    }
}
