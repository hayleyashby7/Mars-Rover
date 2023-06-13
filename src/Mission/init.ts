import { Mission } from '../types.d';
import { createPlateau } from '../Plateau/plateau';

export const initialiseMission = (): Mission => {
	const mission: Mission = { plateau: createPlateau(), vehicles: [] };
	return mission;
};
