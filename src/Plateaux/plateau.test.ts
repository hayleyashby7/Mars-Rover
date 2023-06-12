import { Plateau } from './plateau.d';
import { createPlateau } from './plateau';
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
});
