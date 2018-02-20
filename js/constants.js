// Constants to allow changing of 'magic numbers'

// Gameplay options

PADDLE_WIDTH = 100;
BRICKS_GRID_WIDTH = 14;
BRICKS_GRID_HEIGHT = 8; // May get funky if this isn't divisible by 4
YELLOW_BRICK = 1;
ORANGE_BRICK = 2;
BLUE_BRICK = 3;
GREEN_BRICK = 5;
MAX_POSSIBLE_SCORE = (YELLOW_BRICK+ORANGE_BRICK+BLUE_BRICK+GREEN_BRICK)*((BRICKS_GRID_HEIGHT/4)*BRICKS_GRID_WIDTH);
BRICKS_AREA = 4; // bricks take up 1/4 of the game area

// Rendering options

YELLOW_COLOR = 'rgba(255, 255, 0, 1)';
ORANGE_COLOR = 'rgba(255, 125, 55, 1)';
BLUE_COLOR = 'rgba(55, 55, 255, 1)';
GREEN_COLOR = 'rgba(55, 200, 55, 1)';
