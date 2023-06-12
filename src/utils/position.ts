export interface Position {
	x: number;
	y: number;
}

export const isValidPosition = (position: Position): boolean => position.x >= 0 || position.y >= 0;
