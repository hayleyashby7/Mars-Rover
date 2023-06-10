import { Rover } from './rover.d';
import { createRover } from './rover';

describe('Rover', () => {
	it('can be created', () => {
		// Act
		const result: Rover = createRover(1);

		// Assert
		expect(result).toBeDefined();
	});
});
