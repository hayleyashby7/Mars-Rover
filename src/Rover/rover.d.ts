export type Rover = {
	ID: number;
	position: Position;
	direction: Direction;
};

export interface Position {
	[x: number, y: number];
}

export type Direction = 'N' | 'E' | 'S' | 'W';
