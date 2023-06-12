const DIRECTION = ['N', 'E', 'S', 'W'] as const;

export type Direction = (typeof DIRECTION)[number];

export const isDirection = (direction: string): direction is Direction => direction === 'N' || direction === 'E' || direction === 'S' || direction === 'W';
