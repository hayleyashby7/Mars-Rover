import { Plateau, Cell } from '../types';
import { Position } from '../utils/position';

export const createPlateau = (height: number = 0, width: number = 0): Plateau => {
	const plateau: Plateau = {
		Height: height,
		Width: width,
		isValidLocation: isValidLocation,
		isLocationEmpty: isLocationEmpty,
		Grid: generateGrid(height, width),
	};
	return plateau;
};

export const isValidLocation = (plateau: Plateau, position: Position): boolean => (isValidX(plateau.Width, position.x) && isValidY(plateau.Height, position.y) ? true : false);

const isValidX = (width: number, x: number): boolean => (x >= 0 && x <= width ? true : false);

const isValidY = (height: number, y: number): boolean => (y >= 0 && y <= height ? true : false);

export const isLocationEmpty = (plateau: Plateau, position: Position): boolean => {
	if (!plateau.Grid) return false;

	const isEmpty: boolean = plateau.Grid[position.x][position.y].Occupied ? false : true;

	return isEmpty;
};

const generateGrid = (height: number, width: number): Cell[][] | null => {
	if (height <= 0 || width <= 0) return null;

	const grid: Cell[][] = [...Array(width)].map((_, x) => [...Array(height)].map((_, y) => ({ x, y, Occupied: false })));
	return grid;
};

export const occupyLocation = (plateau: Plateau, position: Position): void => {
	if (!plateau.Grid) return;
	if (!plateau.isLocationEmpty(plateau, position)) throw new Error('Location is not empty');

	plateau.Grid[position.x][position.y].Occupied = true;
};
