import { Input } from '../types';

export const parseInput = (input: string): Input => {
	const lines = input.split('\n');
	const plateau = parsePlateau(lines[0]);
	const vehicles = parseVehicles(lines.slice(1));

	return {
		PlateauHeight: plateau[0],
		PlateauWidth: plateau[1],
		NumberOfVehicles: vehicles,
	};
};

const parsePlateau = (input: string): [number, number] => {
	const plateau = input.split(' ');
	return [parseInt(plateau[0]), parseInt(plateau[1])];
};

const parseVehicles = (input: string[]): number => input.length / 2;
