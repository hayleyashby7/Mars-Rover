import { Rover } from '../Rover/rover';

export const runMission = (input: string): string => {
	return input;
};

export const performRoverMoves = (rover: Rover, moves: string): void => {
	const movesArray = moves.split('');

	movesArray.forEach((move: string) => {
		rover.move(move);
	});
};
