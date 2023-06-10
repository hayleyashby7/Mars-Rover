export type Rover = {
	ID: number;
    position: Position;
};

export interface Position {
	[x: number, y: number];
}
