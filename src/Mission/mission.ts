import { occupyLocation, vacateLocation } from '../Plateau/plateau';
import { Rover } from '../Rover/rover';
import { Input, Plateau } from '../types';
import { parseInput } from '../utils/input';
import { initialiseMission } from './init';

export const runMission = (input: string): string => {
	const parsedInput: Input = parseInput(input);
	const mission = initialiseMission(parsedInput);
	let output: string = '';

	if (!mission) return output;
	if (!mission.Plateau) return output;
	if (!mission.Vehicles) return output;

	for (let i = 0; i < mission.Vehicles.length; i++) {
		performRoverMoves(mission.Plateau, mission.Vehicles[i], parsedInput.VehicleInputs[i].moves);
		output += `${mission.Vehicles[i].Position.x} ${mission.Vehicles[i].Position.y} ${mission.Vehicles[i].Direction}\n`;
	}

	return output;
};

export const performRoverMoves = (plateau: Plateau, rover: Rover, moves: string): void => {
	const movesArray = moves.split('');

	movesArray.forEach((move: string) => {
		if (move === 'M' && !isMoveValid(plateau, rover)) {
			throw new Error(`Move ${move} would send rover off plateau!`);
		}
		const oldPosition = rover.Position;
		rover.move(move);
		vacateLocation(plateau, oldPosition);
		occupyLocation(plateau, rover.Position);
	});
};

const isMoveValid = (plateau: Plateau, rover: Rover): boolean => {
	const testRover = new Rover(rover.ID, rover.Position, rover.Direction);
	testRover.move('M');

	if (!plateau.isValidLocation(plateau, testRover.Position)) return false;
	if (!plateau.isLocationEmpty(plateau, testRover.Position)) return false;
	return true;
};
