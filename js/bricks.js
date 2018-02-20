BRICKS_GRID_WIDTH = 14;
BRICKS_GRID_HEIGHT = 8;

function getBricksGrid(){
    // Returns grid of bricks, where each brick is represented by
    // either their score value, or undefined meaning it is gone.
    grid = [];

    for(i = 0; i < BRICKS_GRID_HEIGHT; i++){
        row = [];
        for(j = 0; j < BRICKS_GRID_WIDTH; j++){
            if(i < 2){
                row.push(5);
            } else if(i < 4){
                row.push(3);
            } else if(i < 6){
                row.push(2);
            } else {
                row.push(1);
            }
        }
        grid.push(row);
    }

    return grid;
}

