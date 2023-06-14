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
});
