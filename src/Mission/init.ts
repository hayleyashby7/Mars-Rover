import { Mission } from '../types.d';
import { createRover } from '../Rover/rover';
import { createPlateau } from '../Plateau/plateau';

export const initialiseMission = (): Mission => {
	const mission: Mission = { plateau: createPlateau(), vehicles: [createRover()] };
	return mission;
};
