import { Input } from '../types';

export const parseInput = (input: string): Input => {
	const lines = input.split('\n');
	const plateau = parsePlateau(lines[0]);

	return {
		plateauHeight: plateau[0],
		plateauWidth: plateau[1],
	};
};

const parsePlateau = (input: string): [number, number] => {
	const plateau = input.split(' ');
	return [parseInt(plateau[0]), parseInt(plateau[1])];
};
