import { Plateau } from './plateau.d';
import { createPlateau } from './plateau';
describe('Plataeu', () => {
	it('can be created', () => {
		//Act
		const result: Plateau = createPlateau();

		//Assert
		expect(result).toBeDefined();
	});
});
