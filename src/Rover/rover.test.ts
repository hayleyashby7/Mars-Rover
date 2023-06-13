import { Rover } from '../types';
import { changePosition, createRover, changeDirection } from './rover';
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
		const redirectedRover = changeDirection(rover, 'E');

		// Assert
		expect(redirectedRover.Direction).toEqual(expectedDirection);
	});

	it('can only change to a valid direction', () => {
		// Arrange
		const rover: Rover = createRover();
		const expectedDirection: Direction = rover.Direction;

		// Act
		const redirectedRover = changeDirection(rover, 'X');

		// Assert
		expect(redirectedRover.Direction).toEqual(expectedDirection);
		expect(redirectedRover.Direction).not.toEqual('X');
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
		expect(movedRover.Position).toEqual(expectedPosition);
	});

	it('cannot change position to a negative value', () => {
		// Arrange
		const rover: Rover = createRover();
		const expectedPosition: Position = { x: 0, y: 0 };

		// Act
		const movedRover = changePosition(rover, { x: -1, y: -1 });

		// Assert
		expect(movedRover.Position).toEqual(expectedPosition);
	});
});
