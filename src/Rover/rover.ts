import { Rover } from '../types';
import { isDirection, Direction } from '../utils/direction';
import { Position, isValidPosition } from '../utils/position';

export const createRover = (id: number = 0): Rover => {
	const newRover: Rover = { ID: id, Position: { x: 0, y: 0 }, Direction: 'N', changePosition: changePosition, changeDirection: changeDirection };

	return newRover;
};

export const changePosition = (rover: Rover, newPosition: Position): Rover => {
	isValidPosition(newPosition) ? (rover.Position = newPosition) : null;
	return rover;
};

export const changeDirection = (rover: Rover, newDirection: string): Rover => {
	isDirection(newDirection) ? (rover.Direction = newDirection as Direction) : null;
	return rover;
};
