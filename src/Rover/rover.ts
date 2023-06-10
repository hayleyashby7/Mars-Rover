import { Rover } from './rover.d';

export const createRover = (id: number): Rover => {
	const newRover: Rover = { ID: id };
	return newRover;
};
