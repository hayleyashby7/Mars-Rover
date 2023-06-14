import { Rover } from '../Rover/rover';
import { Input } from '../types';
import { parseInput } from '../utils/input';
import { initialiseMission } from './init';

export const runMission = (input: string): string => {
	const parsedInput: Input = parseInput(input);
	const mission = initialiseMission(parsedInput);
	let output: string = '';

	for (let i = 0; i < mission.Vehicles.length; i++) {
		performRoverMoves(mission.Vehicles[i], parsedInput.VehicleInputs[i].moves);
		output += `${mission.Vehicles[i].Position.x} ${mission.Vehicles[i].Position.y} ${mission.Vehicles[i].Direction}\n`;
	}

	return output;
};

export const performRoverMoves = (rover: Rover, moves: string): void => {
	const movesArray = moves.split('');

	movesArray.forEach((move: string) => {
		rover.move(move);
	});
};
