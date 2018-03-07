// Need position, velocity, rotation(opt), lifetime
function particularize(y, x){
    min_y = ((1+(y/BRICKS_GRID_HEIGHT))/BRICKS_AREA)*game_data.canvas.height;
    min_x = x * (game_data.canvas.width/BRICKS_GRID_WIDTH);
    max_y = ((1+((y+1)/BRICKS_GRID_HEIGHT))/BRICKS_AREA)*game_data.canvas.height;
    max_x = (x+1) * (game_data.canvas.width/BRICKS_GRID_WIDTH);
    center_x = (max_x + min_x) / 2;
    center_y = (max_y + min_y) / 2;
    step_x = (max_x-min_x) / NUM_PARTICLES / 4;
    step_y = (max_y-min_y) / NUM_PARTICLES;
    color = getBrickColor(game_data.bricks[brick_y][brick_x]);
    p_x = min_x;
    p_y = min_y;
    for(i = 0; i < NUM_PARTICLES; i++){
        for(j = 0; j < 4*NUM_PARTICLES; j++){
            xvel = PARTICLE_SPEED * (p_x - center_x) * Math.random();
            yvel = PARTICLE_SPEED * (p_y - center_y) * Math.random();
            lifetime = PARTICLE_LIFETIME * Math.random();
            createParticle({'x':p_x, 'y':p_y, 'xvel': xvel, 'yvel':yvel, 'lifetime':lifetime, 'color':color});
            p_x += step_x;
        }
        p_x = min_x;
        p_y += step_y;
    }
}

function createParticle(spec){
    particle = {'xpos':spec.x,
                'ypos':spec.y,
                'xvel':spec.xvel,
                'yvel':spec.yvel,
                'lifetime':spec.lifetime,
                'color':spec.color
    };
    game_data.particles.push(particle);
}

function updateParticles(){
    if(game_data.state['game_over']) gameOverFireworks();
    for(i = 0; i < game_data.particles.length; i++){
        game_data.particles[i]['lifetime'] -= game_data.time['elapsed'];
        if(game_data.particles[i]['lifetime'] <= 0) delete game_data.particles[i];
        else {
            game_data.particles[i]['xpos'] += game_data.particles[i]['xvel'] * game_data.time['elapsed'];
            game_data.particles[i]['ypos'] += game_data.particles[i]['yvel'] * game_data.time['elapsed'];
        }
    }

    game_data.particles = game_data.particles.filter(function(n){return n!== undefined});
}

function renderParticles(){
   for(i = 0; i < game_data.particles.length; i++){
       renderParticle(game_data.particles[i]);
   }
}

function renderParticle(particle){
    width = canvas.width/BRICKS_GRID_WIDTH;
    height = canvas.height/BRICKS_GRID_HEIGHT/BRICKS_AREA;
    drawRectangle(game_data.context,
        {
            x: particle.xpos,
            y: particle.ypos,
            width: PARTICLE_SIZE,
            height: PARTICLE_SIZE,
            fill: particle.color,
            stroke: particle.color
        }
    );
}

function createFireworks(y, x){
    min_y = y;
    min_x = x;
    max_y = y + 100;
    max_x = x + 100;
    center_x = (max_x + min_x) / 2;
    center_y = (max_y + min_y) / 2;
    step_x = (max_x-min_x) / NUM_PARTICLES;
    step_y = (max_y-min_y) / NUM_PARTICLES;
    color = getRandomColor();
    p_x = min_x;
    p_y = min_y;
    for(i = 0; i < NUM_PARTICLES; i++){
        for(j = 0; j < NUM_PARTICLES; j++){
            xvel = PARTICLE_SPEED * (p_x - center_x) * Math.random();
            yvel = PARTICLE_SPEED * (p_y - center_y) * Math.random();
            lifetime = PARTICLE_LIFETIME * Math.random() * 5;
            createParticle({'x':p_x, 'y':p_y, 'xvel': xvel, 'yvel':yvel, 'lifetime':lifetime, 'color':color});
            p_x += step_x;
        }
        p_x = min_x;
        p_y += step_y;
    }
}

function gameOverFireworks(){
    if(Math.random() <= .025){
        r_x = Math.random() * (game_data.canvas.width - 400) + 200;
        r_y = Math.random() * (game_data.canvas.height - 400) + 200;
        createFireworks(r_y, r_x);
    }
}
