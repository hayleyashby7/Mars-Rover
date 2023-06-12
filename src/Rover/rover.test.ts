import { Rover } from './rover.d';
import { changePosition, createRover, changeDirection } from './rover';
import { Direction } from './direction';
import { Position } from './position';

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
		expect(result.position).toBeDefined();
		expect(result.position).toEqual(expectedPosition);
	});

	it('has a direction', () => {
		// Arrange
		const expectedDirection: Direction = 'N';

		// Act
		const result: Rover = createRover();

		// Assert
		expect(result.direction).toBeDefined();
		expect(result.direction).toEqual(expectedDirection);
	});
});

describe('Change Direction', () => {
	it('can change direction', () => {
		// Arrange
		const rover: Rover = createRover();
		const expectedDirection: Direction = 'E';

		// Act
		const redirectedRover = changeDirection(rover, 'E');

		// Assert
		expect(redirectedRover.direction).toEqual(expectedDirection);
	});

	it('can only change to a valid direction', () => {
		// Arrange
		const rover: Rover = createRover();
		const expectedDirection: Direction = rover.direction;

		// Act
		const redirectedRover = changeDirection(rover, 'X');

		// Assert
		expect(redirectedRover.direction).toEqual(expectedDirection);
		expect(redirectedRover.direction).not.toEqual('X');
	});
});

describe('Change Position', () => {
	it('can change position', () => {
		// Arrange
		const rover: Rover = createRover();
		const expectedPosition: Position = { x: 1, y: 1 };

		// Act
		const movedRover = changePosition(rover, { x: 1, y: 1 });

		// Assert
		expect(movedRover.position).toEqual(expectedPosition);
	});

	it('cannot change position to a negative value', () => {
		// Arrange
		const rover: Rover = createRover();
		const expectedPosition: Position = { x: 0, y: 0 };

		// Act
		const movedRover = changePosition(rover, { x: -1, y: -1 });

		// Assert
		expect(movedRover.position).toEqual(expectedPosition);
	});
});
