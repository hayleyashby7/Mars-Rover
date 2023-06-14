import { Plateau } from '../types';
import { createPlateau, isValidLocation, isLocationEmpty, occupyLocation, vacateLocation } from './plateau';
import { Position } from '../utils/position';

describe('Plataeu', () => {
	it('can be created', () => {
		//Act
		const result: Plateau = createPlateau();

		//Assert
		expect(result).toBeDefined();
	});

	it('can be created with a defined height and width', () => {
		//Arrange
		const expectedHeight: number = 5;
		const expectedWidth: number = 5;

		//Act
		const result: Plateau = createPlateau(expectedHeight, expectedWidth);

		//Assert
		expect(result.Height).toBeDefined();
		expect(result.Height).toEqual(expectedHeight);
		expect(result.Width).toBeDefined();
		expect(result.Width).toEqual(expectedWidth);
	});

	it('can confirm if a grid location is valid', () => {
		//Arrange
		const plateau: Plateau = createPlateau(5, 5);
		const position: Position = { x: 0, y: 0 };

		//Act
		const validResult: boolean = isValidLocation(plateau, position);

		//Assert
		expect(validResult).toBe(true);
	});

	it('can confirm if a grid location is invalid', () => {
		//Arrange
		const plateau: Plateau = createPlateau(5, 5);
		const position: Position = { x: 6, y: 6 };

		//Act
		const validResult: boolean = isValidLocation(plateau, position);

		//Assert
		expect(validResult).toBe(false);
	});

	it('can confirm if a grid location is empty', () => {
		//Arrange
		const plateau: Plateau = createPlateau(5, 5);
		const position: Position = { x: 1, y: 1 };

		//Act
		const result: boolean = isLocationEmpty(plateau, position);

		//Assert
		expect(result).toBe(true);
	});

	it('a grid location can be occupied', () => {
		//Arrange
		const plateau: Plateau = createPlateau(5, 5);
		const position: Position = { x: 1, y: 1 };
		const resultBefore: boolean = isLocationEmpty(plateau, position);

		//Act
		occupyLocation(plateau, position);
		const resultAfter: boolean = isLocationEmpty(plateau, position);

		//Assert
		expect(resultBefore).toBe(true);
		expect(resultAfter).toBe(false);
	});

	it('a grid location cannot be occupied if it is already occupied', () => {
		//Arrange
		const plateau: Plateau = createPlateau(5, 5);
		const position: Position = { x: 1, y: 1 };

		//Act
		occupyLocation(plateau, position);
		const empty: boolean = isLocationEmpty(plateau, position);

		//Assert
		expect(empty).toBe(false);
		expect(() => {
			occupyLocation(plateau, position);
		}).toThrow('Location is not empty');
	});

	it('a grid location can be vacated', () => {
		//Arrange
		const plateau: Plateau = createPlateau(5, 5);
		const position: Position = { x: 1, y: 1 };
		occupyLocation(plateau, position);
		const resultBefore: boolean = isLocationEmpty(plateau, position);

		//Act
		vacateLocation(plateau, position);
		const resultAfter: boolean = isLocationEmpty(plateau, position);

		//Assert
		expect(resultBefore).toBe(false);
		expect(resultAfter).toBe(true);
	});

	it('Vacating an empty grid location does nothing', () => {
		//Arrange
		const plateau: Plateau = createPlateau(5, 5);
		const position: Position = { x: 1, y: 1 };
		const resultBefore: boolean = isLocationEmpty(plateau, position);

		//Act
		vacateLocation(plateau, position);
		const resultAfter: boolean = isLocationEmpty(plateau, position);

		//Assert
		expect(resultBefore).toBe(true);
		expect(resultAfter).toBe(true);
	});
});
