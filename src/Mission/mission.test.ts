import { runMission, performRoverMoves } from './mission';
import { createRover, Rover } from '../Rover/rover';

describe('Mission', () => {
	it('should take input values and run a mission', () => {
		// Arrange
		const testInput: string = `5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM`;

		// Act
		const result: string = runMission(testInput);

		// Assert
		expect(result).toBeTruthy();
	});

	it('should performs all move inputs for a rover correctly', () => {
		// Arrange
		const moves: string = `LMLMLMLMM`;
		const rover: Rover = createRover(1, { x: 1, y: 2 }, 'N');
		const expectedEndPosition = { x: 1, y: 3 };
		const expectedEndDirection = 'N';

		// Act
		performRoverMoves(rover, moves);

		// Assert
		expect(rover.Position).toEqual(expectedEndPosition);
		expect(rover.Direction).toEqual(expectedEndDirection);
	});
});
