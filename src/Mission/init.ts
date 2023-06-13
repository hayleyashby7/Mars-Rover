import { Mission, Input } from '../types.d';
import { createRover } from '../Rover/rover';
import { createPlateau } from '../Plateau/plateau';
import { parseInput } from '../utils/input';

export const initialiseMission = (input: string = ''): Mission => {
	if (input === '') {
		return { plateau: createPlateau(), vehicles: [createRover()] };
	}

	const parsedInput: Input = parseInput(input);
	const plateau = createPlateau(parsedInput.plateauHeight, parsedInput.plateauWidth);

	const mission: Mission = { plateau: plateau, vehicles: [createRover()] };

	return mission;
};
