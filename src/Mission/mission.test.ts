import { initialiseMission } from './init';

describe('Mission', () => {
	it('should take input values and initialise a mission', () => {
		// Arrange
		const testInput: string = `5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM`;

		// Act
		const result: string = runMission(testInput);

		// Assert
		expect(result).toBeTruthy();
		expect(initialiseMission).toHaveBeenCalled();
	});
});
