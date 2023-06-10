import { createRover } from './rover';

describe('Rover', () => {
	it('can be created', () => {
		// Arrange
		const expected: boolean = true;

		// Act
		const result: boolean = createRover();

		// Assert
		expect(result).toBe(expected);
	});
});
