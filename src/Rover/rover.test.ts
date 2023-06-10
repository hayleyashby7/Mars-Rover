import { createRover } from './rover';

describe('Rover', () => {
	it('can be created', () => {
		// Act
		const result: Rover = createRover();

		// Assert
		expect(result).toBeDefined();
	});
});
