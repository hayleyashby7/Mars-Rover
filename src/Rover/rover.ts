import { Rover } from './rover.d';

export const createRover = (id: number = 0): Rover => {
	const newRover: Rover = { ID: id, position: { x: 0, y: 0 } };

	return newRover;
};
