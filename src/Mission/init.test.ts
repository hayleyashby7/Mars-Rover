import { Input, Mission } from '../types';
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
		const expectedPlateauHeight: number = 6;
		const expectedPlateauWidth: number = 6;
		const testInput: Input = {
			PlateauHeight: 5,
			PlateauWidth: 5,
			VehicleInputs: [],
		};

		// Act
		const mission: Mission = initialiseMission(testInput);

		// Assert
		expect(mission.Plateau.Height).toBe(expectedPlateauHeight);
		expect(mission.Plateau.Width).toBe(expectedPlateauWidth);
	});

	it('should use input to determine the number of rovers', () => {
		// Arrange
		const expectedNumberOfRovers: number = 2;
		const testInput: Input = {
			PlateauHeight: 5,
			PlateauWidth: 5,
			VehicleInputs: [
				{ startingPosition: { x: 1, y: 2 }, startingDirection: 'N', moves: 'LMLMLMLMM' },
				{ startingPosition: { x: 3, y: 3 }, startingDirection: 'E', moves: 'MMRMMRMRRM' },
			],
		};

		// Act
		const mission: Mission = initialiseMission(testInput);

		// Assert
		expect(mission.Vehicles.length).toBe(expectedNumberOfRovers);
	});

	it('should give all rovers a unique ID', () => {
		// Arrange
		const testInput: Input = {
			PlateauHeight: 5,
			PlateauWidth: 5,
			VehicleInputs: [
				{ startingPosition: { x: 1, y: 2 }, startingDirection: 'N', moves: 'LMLMLMLMM' },
				{ startingPosition: { x: 3, y: 3 }, startingDirection: 'E', moves: 'MMRMMRMRRM' },
			],
		};

		// Act
		const mission: Mission = initialiseMission(testInput);

		// Assert
		expect(mission.Vehicles[0].ID).not.toBe(mission.Vehicles[1].ID);
	});
});
