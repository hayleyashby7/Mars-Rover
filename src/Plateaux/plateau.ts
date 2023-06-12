import { Plateau } from './plateau.d';
import { Position } from '../utils/position';

export const createPlateau = (height: number = 0, width: number = 0): Plateau => {
	const plateau: Plateau = { height: height, width: width, isValidLocation: isValidLocation };
	return plateau;
};

export const isValidLocation = (plateau: Plateau, position: Position): boolean => (isValidX(plateau, position.x) && isValidY(plateau, position.y) ? true : false);

const isValidX = (plateau: Plateau, x: number): boolean => (x >= 0 && x <= plateau.width ? true : false);

const isValidY = (plateau: Plateau, y: number): boolean => (y >= 0 && y <= plateau.height ? true : false);
