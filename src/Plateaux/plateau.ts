import { Plateau, Cell } from './plateau.d';
import { Position } from '../utils/position';

export const createPlateau = (height: number = 0, width: number = 0): Plateau => {
	const plateau: Plateau = {
		height: height,
		width: width,
		isValidLocation: isValidLocation,
		isLocationEmpty: isLocationEmpty,
		grid: generateGrid(height, width),
	};
	return plateau;
};

export const isValidLocation = (plateau: Plateau, position: Position): boolean => (isValidX(plateau.width, position.x) && isValidY(plateau.height, position.y) ? true : false);

const isValidX = (width: number, x: number): boolean => (x >= 0 && x <= width ? true : false);

const isValidY = (height: number, y: number): boolean => (y >= 0 && y <= height ? true : false);

export const isLocationEmpty = (plateau: Plateau, position: Position): boolean => {
	if (!plateau.grid) return false;

	const isEmpty: boolean = plateau.grid[position.x][position.y].occupied ? false : true;
	
	return isEmpty;
};

const generateGrid = (height: number, width: number): Cell[][] | null => {
	if (height <= 0 || width <= 0) return null;

	const grid: Cell[][] = [...Array(width)].map((_, x) => [...Array(height)].map((_, y) => ({ x, y, occupied: false })));
	return grid;
};
