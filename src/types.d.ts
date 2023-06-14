import Direction from '../utils/direction';
import Position from '../utils/position';
export interface Vehicle {
	readonly ID: number;
	Position: Position;
	Direction: Direction;
	changePosition: (newPosition: Position) => Vehicle;
	changeDirection: (newDirection: string) => Vehicle;
	move: (move: string) => Vehicle;
}

export interface Plateau {
	Height: number;
	Width: number;
	Grid: Cell[][] | null;
	isValidLocation: (plateau: Plateau, position: Position) => boolean;
	isLocationEmpty: (plateau: Plateau, position: Position) => boolean;
}

export interface Cell {
	x: number;
	y: number;
	Occupied: boolean;
}

export interface Mission {
	Plateau: Plateau;
	Vehicles: Vehicle[];
}

export interface Input {
	PlateauHeight: number;
	PlateauWidth: number;
	NumberOfVehicles: number;
}
