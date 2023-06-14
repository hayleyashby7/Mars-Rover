import { Direction } from '../utils/direction';
import { Position } from '../utils/position';
import { runMission } from './mission';

describe('Mission', () => {
	it('should take input values and run a mission', () => {
		// Arrange
		const testInput: string = `5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM`;

		// Act
		const result: string = runMission(testInput);

		// Assert
		expect(result).toBeTruthy();
	});

	it('should process the moves of a rover', () => {
		// Arrange
		const startPosition: Position = { x: 1, y: 2 };
		const startDirection: Direction = 'N';
		const moves: string = `LMLMLMLMM`;
		const expectedPosition: Position = { x: 1, y: 3 };

		// Act
		const result = performActions(startPosition, startDirection, moves);

		// Assert
		expect(result).toEqual(expectedPosition);
	});
});
