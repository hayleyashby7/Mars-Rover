export interface Position {
	x: number;
	y: number;
}

const DIRECTION = ['N', 'E', 'S', 'W'] as const;

export type Direction = (typeof DIRECTION)[number];

