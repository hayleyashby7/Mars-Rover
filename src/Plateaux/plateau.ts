import { Plateau } from './plateau.d';
import { Position } from '../utils/position';

export const createPlateau = (height: number = 0, width: number = 0): Plateau => {
	const plateau: Plateau = { height: height, width: width, isValidLocation: isValidLocation };
	return plateau;
};

export const isValidLocation = (plateau: Plateau, position: Position): boolean => (isValidX(plateau.width, position.x) && isValidY(plateau.height, position.y) ? true : false);

const isValidX = (width: number, x: number): boolean => (x >= 0 && x <= width ? true : false);

const isValidY = (height: number, y: number): boolean => (y >= 0 && y <= height ? true : false);
