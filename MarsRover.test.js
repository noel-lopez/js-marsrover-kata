const {
    MarsRover
} = require('./MarsRover.js');

describe('marsrover', () => {

    describe('You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing', () => {
        test('should set starting location', () => {
            let mr = new MarsRover([6, 9]);
            expect(mr.location).toEqual([6,9]);
        })
        test('should use default starting location [0,0] when not assigned', () => {
            var mr = new MarsRover();
            expect(mr.location).toEqual([0,0]);
        })
        test('should set direction it is facing', () => {
            var mr = new MarsRover([6, 9], 'E');
            expect(mr.direction).toEqual('E');
        })
        test('should use default direction (N) when not assigned', () => {
            var mr = new MarsRover([6,9]);
            expect(mr.direction).toEqual('N');
        })
    })

    describe ('The rover receives a character array of commands', ()=> {
        test('should set commands array', () => {
            var mr = new MarsRover([6,9], 'N');
            mr.commands(['turn', 'left', 'and', 'then', 'walk', 'forward']);
            expect(mr.instructions).toEqual(['turn', 'left', 'and', 'then', 'walk', 'forward']);
        })
    })

    describe ('Implement commands that move the rover forward/backward (f,b)', ()=> {
        test('should -Y when moving North', () => {
            var mr = new MarsRover([6, 9], 'N', [20,20]);
            mr.commands(['f']);
            expect(mr.location).toEqual([6,8])
        })
        test('should +Y when moving South', () => {
            var mr = new MarsRover([5, 9], 'S', [20,20]);
            mr.commands(['f']);
            expect(mr.location).toEqual([5,10])
        })
        test('should -X when moving West', () => {
            var mr = new MarsRover([6, 9], 'W');
            mr.commands(['f']);
            expect(mr.location).toEqual([5,9])
        })
        test('should +X when moving East', () => {
            var mr = new MarsRover([6, 9], 'E');
            mr.commands(['f']);
            expect(mr.location).toEqual([7,9])
        })
        test('should +Y when moving backwards North', () => {
            var mr = new MarsRover([6, 9], 'N', [20,20]);
            mr.commands(['b']);
            expect(mr.location).toEqual([6, 10]);
        })
        test('should -Y when moving backwards South', () => {
            var mr = new MarsRover([6, 9], 'S');
            mr.commands(['b']);
            expect(mr.location).toEqual([6, 8]);
        })
        test('should +X when moving backwards West', () => {
            var mr = new MarsRover([6, 9], 'W', [20,20]);
            mr.commands(['b']);
            expect(mr.location).toEqual([7, 9]);
        })
        test('should -X when moving backwards East', () => {
            var mr = new MarsRover([6, 9], 'E');
            mr.commands(['b']);
            expect(mr.location).toEqual([5, 9]);
        })
    })

    describe ('Implement commands that turn the rover left/right (l,r)', ()=> {
        test('should change direction from N to W when command is turn left', () => {
            var mr = new MarsRover([6, 9], 'N');
            mr.commands(['l'])
            expect(mr.direction).toEqual('W');
        })
        test('should change direction from N to E when command is turn right', () => {
            var mr = new MarsRover([6, 9], 'N');
            mr.commands(['r'])
            expect(mr.direction).toEqual('E');
        })
        test('should change direction from E to S when command is turn right', () => {
            var mr = new MarsRover([6, 9], 'E');
            mr.commands(['r'])
            expect(mr.direction).toEqual('S');
        })
    })

    describe ('Implement wrapping at edges (planets are spheres)', ()=> {
        test('should assign grid', () =>{
            var mr = new MarsRover([6,9], 'N', [20,20])
            expect(mr.grid).toEqual([20,20]);
        })
        test('should use default value 10,10 when grid not assigned', ()=>{
            var mr = new MarsRover([6,9], 'N')
            expect(mr.grid).toEqual([10,10])
        })
        test('should go X to 0 when grid is passed', ()=>{
            var mr = new MarsRover([9,9], 'E')
            mr.commands(['f'])
            expect(mr.location).toEqual([0,9])
        })
        test('should go Y to 0 when grid is passed', ()=>{
            var mr = new MarsRover([9,9], 'S')
            mr.commands(['f'])
            expect(mr.location).toEqual([9,0])
        })
        test('should go X to grid end when grid is passed from West', ()=>{
            var mr = new MarsRover([0,9], 'E')
            mr.commands(['b'])
            expect(mr.location).toEqual([9,9])
        })
        test('should go Y to grid end when grid is passed from North', ()=>{
            var mr = new MarsRover([9,0], 'N')
            mr.commands(['f'])
            expect(mr.location).toEqual([9,9])
        })
    })

    // describe ('Implement obstacle detection before each move to a new square', ()=> {})

})