class MarsRover {
    constructor(location, direction, grid){
        this.location = (location === undefined) ? [0,0] : location;
        this.direction = (direction === undefined) ? 'N' : direction;
        this.grid = (grid === undefined) ? [10, 10] : grid;
        this.directions = ['N', 'E', 'S', 'W'];
        this.instructions = [];
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
        this.location[0] += xIncrease;
        this.location[1] += yIncrease;
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

    resetLocation = function(){
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
                    this.move(command);
                } else if (command === 'l' || command === 'r'){
                    this.turn(command);
                }
            }
            this.resetLocation();
            this.commandsArray = c;
        }
        return 'OK';
    }

}

module.exports = {
    MarsRover
};