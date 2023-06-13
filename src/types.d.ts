import Direction from '../utils/direction';
import Position from '../utils/position';

interface Vehicle {
	readonly ID: number;
	position: Position;
	direction: Direction;
	changePosition: (vehicle: Vehicle, newPosition: Position) => Vehicle;
	changeDirection: (vehicle: Vehicle, newDirection: string) => Vehicle;
}
export interface Rover extends Vehicle {
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

export interface Mission {
	plateau: Plateau;
	vehicles: Vehicle[];
}
