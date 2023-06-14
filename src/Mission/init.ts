import { Mission, Input, Vehicle } from '../types.d';
import { createRover } from '../Rover/rover';
import { createPlateau } from '../Plateau/plateau';

export const initialiseMission = (input: Input | void): Mission => {
	if (!input) {
		return { Plateau: createPlateau(), Vehicles: [createRover()] };
	}

	const plateau = createPlateau(input.PlateauHeight, input.PlateauWidth);
	const vehicles: Vehicle[] = generateVehicles(input.NumberOfVehicles);

	const mission: Mission = { Plateau: plateau, Vehicles: vehicles };

	return mission;
};

const generateVehicles = (totalVehicles: number): Vehicle[] => {
	const vehicles: Vehicle[] = [];
	for (let i = 0; i < totalVehicles; i++) {
		vehicles.push(createRover(i));
	}
	return vehicles;
};
