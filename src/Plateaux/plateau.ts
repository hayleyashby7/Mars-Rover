import { Plateau } from './plateau.d';

export const createPlateau = (height: number = 0, width: number = 0): Plateau => {
	const plateau: Plateau = { height: height, width: width };
	return plateau;
};
