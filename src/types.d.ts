import Direction from '../utils/direction';
import Position from '../utils/position';

export interface Rover {
	ID: number;
	position: Position;
	direction: Direction;
	changePosition: (rover: Rover, newPosition: Position) => Rover;
	changeDirection: (rover: Rover, newDirection: string) => Rover;
}

export interface Plateau {
	height: number;
	width: number;
	grid: Cell[][] | null;
	isValidLocation: (plateau: Plateau, position: Position) => boolean;
	isLocationEmpty: (plateau: Plateau, position: Position) => boolean;
}

export interface Cell {
	x: number;
	y: number;
	occupied: boolean;
}
