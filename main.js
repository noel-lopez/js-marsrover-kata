const {
    MarsRover
} = require('./MarsRover.js');

var mr = new MarsRover([0,0], 'N', [20,20], [[16,14],[6,10]]);

mr.commands(['f','f','f','f','r','b','l','l','f','f','f','r','f','f','r','f','f'])
console.log('end location: ', mr.location);
console.log('end direction: ', mr.direction);