import { runMission, performRoverMoves } from './mission';
import { createRover, Rover } from '../Rover/rover';
import { Direction } from '../utils/direction';
import { Position } from '../utils/position';
import { Plateau } from '../types';
import { createPlateau } from '../Plateau/plateau';

describe('Mission', () => {
	it('should take input values and run a mission', () => {
		// Arrange
		const testInput: string = `5 5\n3 3 E\nMMRMMRMRRM`;

		// Act
		const result: string = runMission(testInput);

		// Assert
		expect(result).toBeTruthy();
	});

	/* it('should performs all move inputs for a rover correctly', () => {
		// Arrange
		const moves: string = `LMLMLMLMM`;
		const rover: Rover = createRover(1, { x: 1, y: 2 }, 'N');
		const plateau: Plateau = createPlateau(5, 5); 
		const expectedEndPosition: Position = { x: 1, y: 3 };
		const expectedEndDirection: Direction = 'N';

		// Act
		performRoverMoves(plateau, rover, moves);

		// Assert
		expect(rover.Position).toEqual(expectedEndPosition);
		expect(rover.Direction).toEqual(expectedEndDirection);
	});

	it('should take input, run a mission and provide correct final output for a single rover', () => {
		// Arrange
		const testInput: string = `5 5\n1 2 N\nLMLMLMLMM`;
		const expectedOutput: string = `1 3 N`;

		// Act
		const result: string = runMission(testInput);

		// Assert
		expect(result).toMatch(expectedOutput);
	});

	it('should take input, run a mission and provide correct final output for multiple rovers', () => {
		// Arrange
		const testInput: string = `5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM`;
		const expectedOutput: string = `1 3 N\n5 1 E`;

		// Act
		const result: string = runMission(testInput);

		// Assert
		expect(result).toMatch(expectedOutput);
	});

	it('will not perform moves that will take a rover beyond the plateau bounds', () => {
		// Arrange
		const moves: string = `LM`;
		const rover: Rover = createRover(0, { x: 4, y: 4 }, 'W');
		const plateau: Plateau = createPlateau(5, 5);
		const expectedEndPosition: Position = { x: 4, y: 4 };
		const expectedEndDirection: Direction = 'N';

		// Act
		performRoverMoves(plateau, rover, moves);

		// Assert
		expect(rover.Position).toEqual(expectedEndPosition);
		expect(rover.Direction).toEqual(expectedEndDirection);
	}); */
});
