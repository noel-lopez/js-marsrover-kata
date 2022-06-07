class MarsRover {
    constructor(location, direction, grid, obstacles) {
        this.location = (location === undefined) ? [0,0] : location;
        this.direction = (direction === undefined) ? 'N' : direction;
        this.grid = (grid === undefined) ? [10, 10] : grid;
        this.obstacles = (obstacles === undefined) ? [] : obstacles;
        this.directions = ['N', 'E', 'S', 'W'];
        this.instructions = [];
    }

    // check if newLocation is obstacle from obstacles array
    isObstacle(newLocation) {
        return this.obstacles.some(obstacle => {
            return newLocation[0] === obstacle[0] && newLocation[1] === obstacle[1];
        });
    }

    move(command) {
        var xIncrease = 0, yIncrease = 0;
        if (this.direction === 'N'){
            yIncrease = -1;
        } else if (this.direction === 'E'){
            xIncrease = 1;
        } else if (this.direction === 'S'){
            yIncrease = 1;
        } else if (this.direction === 'W'){
            xIncrease = -1;
        }
        if (command === 'b') {
            xIncrease *= -1;
            yIncrease *= -1;
        }
        var newLocation = [this.location[0] + xIncrease, this.location[1] + yIncrease];
        if (!this.isObstacle(newLocation)) {
            this.location = newLocation;
            return true;
        } else {
            console.log('Obstacle encountered at ' + newLocation);
            return false;
        }
    }

    directionAsNumber = function(direction) {
        for (var i = 0; i < this.directions.length; i++) {
            if(this.directions[i] === direction) return i;
        }
    }

    turn = function(command) {
        var directionNumber = this.directionAsNumber(this.direction);
        if (command === 'l'){
            directionNumber = (directionNumber + 3) % 4;
        } else{
            directionNumber = (directionNumber +1) % 4;
        }
        this.direction = this.directions[directionNumber];
    }

    wrapEdges = function(){
        this.location = [
            (this.location[0] + this.grid[0]) % this.grid[0],
            (this.location[1] + this.grid[1]) % this.grid[1]
        ]
    }

    commands(c){
        if (c === undefined) {
            return this.commandsArray;
        } else {
            this.instructions = c;
            for (var i = 0; i < c.length; i++) {
                var command = c[i];
                if (command === 'f' || command === 'b') {
                    if (this.move(command)) {
                        this.wrapEdges();
                    } else {
                        return;
                    }
                } else if (command === 'l' || command === 'r'){
                    this.turn(command);
                }
            }
            this.commandsArray = c;
        }
        return 'OK';
    }

}

module.exports = {
    MarsRover
};