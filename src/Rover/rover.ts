import { Rover } from './rover.d';

export const createRover = (id: number = 0): Rover => {
	const newRover: Rover = { ID: id };

	return newRover;
};
