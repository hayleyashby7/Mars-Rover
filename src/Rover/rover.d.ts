import Direction from './direction';
import Position from './position';

export interface Rover {
	ID: number;
	position: Position;
	direction: Direction;
	changePosition: (rover: Rover, newPosition: Position) => Rover;
	changeDirection: (rover: Rover, newDirection: string) => Rover;
}
