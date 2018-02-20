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
