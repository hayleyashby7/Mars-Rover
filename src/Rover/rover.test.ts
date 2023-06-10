import { Rover } from './rover.d';
import { createRover } from './rover';

describe('Rover', () => {
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
});
