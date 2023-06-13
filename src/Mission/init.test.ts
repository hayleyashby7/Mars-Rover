import { createRover } from '../Rover/rover';
import { Mission, Rover } from '../types';
import { initialiseMission } from './init';

describe('Initialise Mission', () => {
	it('should initialise a new mission', () => {
		// Act
		const mission: Mission = initialiseMission();

		// Assert
		expect(mission).toBeDefined();
	});

	it('should initialise a mission with a plateau', () => {
		// Act
		const mission: Mission = initialiseMission();

		// Assert
		expect(mission.Plateau).toBeDefined();
	});

	it('should initialise a mission with a vehicles array', () => {
		// Act
		const mission: Mission = initialiseMission();

		// Assert
		expect(mission.Vehicles).toBeDefined();
	});

	it('should use input to determine the size of the plateau', () => {
		// Arrange
		const expectedPlateauHeight: number = 5;
		const expectedPlateauWidth: number = 5;
		const testInput: string = `5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM`;

		// Act
		const mission: Mission = initialiseMission(testInput);

		// Assert
		expect(mission.Plateau.Height).toBe(expectedPlateauHeight);
		expect(mission.Plateau.Width).toBe(expectedPlateauWidth);
	});

	it('should use input to determine the number of rovers', () => {
		// Arrange
		const expectedNumberOfRovers: number = 2;
		const testInput: string = `5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM`;

		// Act
		const mission: Mission = initialiseMission(testInput);

		// Assert
		expect(mission.Vehicles.length).toBe(expectedNumberOfRovers);
	});
});
