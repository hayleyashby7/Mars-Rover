import { Mission } from '../types';
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
		expect(mission.plateau).toBeDefined();
	});

	it('should initialise a mission with an vehicles array', () => {
		// Act
		const mission: Mission = initialiseMission();

		// Assert
		expect(mission.vehicles).toBeDefined();
	});
});
