import { Plateau } from './plateau.d';
import { Position } from '../utils/position';

export const createPlateau = (height: number = 0, width: number = 0): Plateau => {
	const plateau: Plateau = { height: height, width: width, isValidLocation: isValidLocation };
	return plateau;
};

export const isValidLocation = (plateau: Plateau, position: Position): boolean => (position.x >= 0 && position.x <= plateau.width && position.y >= 0 && position.y <= plateau.height ? true : false);
