import { Plateau } from './plateau.d';
import { createPlateau } from './plateau';
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
		expect(result.height).toBeDefined();
		expect(result.height).toEqual(expectedHeight);
		expect(result.width).toBeDefined();
		expect(result.width).toEqual(expectedWidth);
	});

	it('can confirm if a grid location is valid', () => {
		//Arrange
		const plateau: Plateau = createPlateau(5, 5);
		const position: Position = { x: 0, y: 0 };

		//Act
		const validResult: boolean = plateau.isValidLocation(position);

		//Assert
		expect(validResult).toBe(true);
	});
});
