// Constants to allow changing of 'magic numbers'
// Things may or may not work if these are changed... No guarantees

// Gameplay options

PADDLE_WIDTH = 100;
PADDLE_HEIGHT = 20;
PADDLE_SPEED = 0.0004;
BRICKS_GRID_WIDTH = 14;
BRICKS_GRID_HEIGHT = 8; // May get funky if this isn't divisible by 4
BALL_SIZE = 8;
BALL_SPEED = 0.0002;
YELLOW_BRICK = 1; // Score value for yellow bricks
ORANGE_BRICK = 2; // Score value for orange bricks
BLUE_BRICK = 3; // Score value for blue bricks
GREEN_BRICK = 5; // Score value for green bricks
MAX_POSSIBLE_SCORE = (YELLOW_BRICK+ORANGE_BRICK+BLUE_BRICK+GREEN_BRICK)*((BRICKS_GRID_HEIGHT/4)*BRICKS_GRID_WIDTH);
BRICKS_AREA = 6; // adjusts the area the bricks take up, as well as the area above the bricks


// Rendering options

YELLOW_COLOR = 'rgba(255, 255, 0, 1)';
ORANGE_COLOR = 'rgba(255, 125, 55, 1)';
BLUE_COLOR = 'rgba(55, 55, 255, 1)';
GREEN_COLOR = 'rgba(55, 200, 55, 1)';
SCORE_FONT = '30px Arial';
SCORE_COLOR = 'rgba(200, 200, 200, 1)';
PADDLE_FILL = 'rgba(55, 55, 55, 1)';
PADDLE_STROKE = 'rgba(255, 255, 255, 1)';
BALL_STROKE = 'rgba(255, 255, 255, 1)';
