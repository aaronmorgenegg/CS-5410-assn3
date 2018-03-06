// Need position, velocity, rotation(opt), lifetime
function particularize(y, x){
    p_y = y;
    p_x = x;
    xvel = PARTICLE_SPEED;
    yvel = PARTICLE_SPEED;
    lifetime = PARTICLE_LIFETIME;
    color = getBrickColor(game_data.bricks[brick_y][brick_x]);
    createParticle({'x':p_x, 'y':p_y, 'xvel': xvel, 'yvel':yvel, 'lifetime':lifetime, 'color':color});
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
