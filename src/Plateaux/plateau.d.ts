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
