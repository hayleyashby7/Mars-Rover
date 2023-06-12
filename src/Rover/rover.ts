import { Rover } from './rover.d';
import { isDirection, Direction } from '../utils/direction';
import { Position, isValidPosition } from '../utils/position';

export const createRover = (id: number = 0): Rover => {
	const newRover: Rover = { ID: id, position: { x: 0, y: 0 }, direction: 'N', changePosition: changePosition, changeDirection: changeDirection };

	return newRover;
};

export const changePosition = (rover: Rover, newPosition: Position): Rover => {
	isValidPosition(newPosition) ? (rover.position = newPosition) : null;
	return rover;
};

export const changeDirection = (rover: Rover, newDirection: string): Rover => {
	isDirection(newDirection) ? (rover.direction = newDirection as Direction) : null;
	return rover;
};
