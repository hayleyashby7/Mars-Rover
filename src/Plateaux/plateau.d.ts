export interface Plateau {
	height: number;
	width: number;
	isValidLocation: (plateau: Plateau, position: Position) => boolean;
}
