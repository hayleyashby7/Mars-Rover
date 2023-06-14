import { Direction } from './direction';
import { Position } from './position';

const MOVE = ['L', 'R', 'M'] as const;

export type Move = (typeof MOVE)[number];

export const isMove = (move: string): move is Move => move === 'L' || move === 'R' || move === 'M';

export const moveForward = (direction: Direction, position: Position): Position => {
	switch (direction) {
		case 'N':
			return { x: position.x, y: position.y + 1 };
		case 'E':
			return { x: position.x + 1, y: position.y };
		case 'S':
			return { x: position.x, y: position.y - 1 };
		case 'W':
			return { x: position.x - 1, y: position.y };
	}
};

export const turnLeft = (direction: Direction): Direction => {
    switch (direction) {
        case 'N':
            return 'W';
        case 'E':
            return 'N';
        case 'S':
            return 'E';
        case 'W':
            return 'S';
    }
};

