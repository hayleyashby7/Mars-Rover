import { Rover, createRover} from './rover';
import { Direction } from '../utils/direction';
import { Position } from '../utils/position';

describe('Create Rover', () => {
	it('can be created', () => {
		// Act
		const result: Rover = createRover(1);

		// Assert
		expect(result).toBeDefined();
	});

	it('has an ID, that matches the ID provided when created', () => {
		// Arrange
		const expectedID: number = 1;

		// Act
		const result: Rover = createRover(expectedID);

		// Assert
		expect(result.ID).toBeDefined();
		expect(result.ID).toEqual(expectedID);
	});

	it('has a default ID of 0 if none provided', () => {
		// Arrange
		const expectedID: number = 0;

		// Act
		const result: Rover = createRover();

		// Assert
		expect(result.ID).toBeDefined();
		expect(result.ID).toEqual(expectedID);
	});

	it('has a position', () => {
		// Arrange
		const expectedPosition: Position = { x: 0, y: 0 };

		// Act
		const result: Rover = createRover();

		// Assert
		expect(result.Position).toBeDefined();
		expect(result.Position).toEqual(expectedPosition);
	});

	it('has a direction', () => {
		// Arrange
		const expectedDirection: Direction = 'N';

		// Act
		const result: Rover = createRover();

		// Assert
		expect(result.Direction).toBeDefined();
		expect(result.Direction).toEqual(expectedDirection);
	});
});

describe('Change Direction', () => {
	it('can change direction', () => {
		// Arrange
		const rover: Rover = createRover();
		const expectedDirection: Direction = 'E';

		// Act
		rover.changeDirection('E');

		// Assert
		expect(rover.Direction).toEqual(expectedDirection);
	});

	it('can only change to a valid direction', () => {
		// Arrange
		const rover: Rover = createRover();
		const expectedDirection: Direction = rover.Direction;

		// Act
		rover.changeDirection( 'X');

		// Assert
		expect(rover.Direction).toEqual(expectedDirection);
		expect(rover.Direction).not.toEqual('X');
	});
});

describe('Change Position', () => {
	it('can change position', () => {
		// Arrange
		const rover: Rover = createRover();
		const expectedPosition: Position = { x: 1, y: 1 };

		// Act
		rover.changePosition({ x: 1, y: 1 });

		// Assert
		expect(rover.Position).toEqual(expectedPosition);
	});

	it('cannot change position to a negative value', () => {
		// Arrange
		const rover: Rover = createRover();
		const expectedPosition: Position = { x: 0, y: 0 };

		// Act
		rover.changePosition( { x: -1, y: -1 });

		// Assert
		expect(rover.Position).toEqual(expectedPosition);
	});
});

describe('Move Rover', () => {
	it('can move forward', () => {
		// Arrange
		const rover: Rover = createRover();

		const expectedPosition: Position = { x: 0, y: 1 };

		// Act
		rover.move('M');

		// Assert
		expect(rover.Position).toEqual(expectedPosition);
	});

	it('can move forward to the North', () => {
		// Arrange
		const rover: Rover = createRover();

		const expectedPosition: Position = { x: 0, y: 1 };

		// Act
		rover.move('M');

		// Assert
		expect(rover.Position).toEqual(expectedPosition);
	});

	it('can move forward to the East', () => {
		// Arrange
		const rover: Rover = createRover(0, { x: 0, y: 0 }, 'E');
		const expectedPosition: Position = { x: 1, y: 0 };

		// Act
		rover.move('M');

		// Assert
		expect(rover.Position).toEqual(expectedPosition);
	});

	it('can move forward to the South', () => {
		// Arrange
		const rover: Rover = createRover(0, { x: 2, y: 2 }, 'S');

		const expectedPosition: Position = { x: 2, y: 1 };

		// Act
		rover.move('M');

		// Assert
		expect(rover.Position).toEqual(expectedPosition);
	});

	it('can move forward to the West', () => {
		// Arrange
		const rover: Rover = createRover(0, { x: 2, y: 2 }, 'W');

		const expectedPosition: Position = { x: 1, y: 2 };

		// Act
		rover.move('M');

		// Assert
		expect(rover.Position).toEqual(expectedPosition);
	});

	it('can turn left', () => {
		// Arrange
		const rover: Rover = createRover();
		const expectedDirection: Direction = 'W';

		// Act
		rover.move('L');

		// Assert
		expect(rover.Direction).toEqual(expectedDirection);
	});

	it('can turn right', () => {
		// Arrange
		const rover: Rover = createRover();
		const expectedDirection: Direction = 'E';

		// Act
		rover.move('R');

		// Assert
		expect(rover.Direction).toEqual(expectedDirection);
	});

	it('cannot turn to an invalid direction', () => {
		// Arrange
		const rover: Rover = createRover();
		const expectedDirection: Direction = rover.Direction;

		// Act
		rover.move('X');

		// Assert
		expect(rover.Direction).toEqual(expectedDirection);
		expect(rover.Direction).not.toEqual('X');
	});

});
