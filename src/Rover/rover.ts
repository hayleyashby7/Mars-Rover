import { Position, Direction } from './rover.d';

export interface Rover {
	ID: number;
	position: Position;
	direction: Direction;
	changePosition: (rover: Rover, newPosition: Position) => Rover;
}

export const createRover = (id: number = 0): Rover => {
	const newRover: Rover = { ID: id, position: { x: 0, y: 0 }, direction: 'N', changePosition: changePosition };

	return newRover;
};

export const changePosition = (rover: Rover, newPosition: Position): Rover => {
	newPosition.x >= 0 || newPosition.y >= 0 ? (rover.position = newPosition) : null;
	return rover;
};
