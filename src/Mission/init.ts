import { Mission, Input, Vehicle, VehicleInput } from '../types.d';
import { createRover } from '../Rover/rover';
import { createPlateau } from '../Plateau/plateau';

export const initialiseMission = (input: Input | void): Mission => {
	if (!input) {
		return { Plateau: createPlateau(), Vehicles: [createRover()] };
	}

	const plateau = createPlateau(input.PlateauHeight, input.PlateauWidth);
	const vehicles: Vehicle[] = generateVehicles(input.VehicleInputs);

	const mission: Mission = { Plateau: plateau, Vehicles: vehicles };

	return mission;
};

const generateVehicles = (totalVehicles: VehicleInput[]): Vehicle[] => {
	const vehicles: Vehicle[] = [];
	
	for (let i = 0; i < totalVehicles.length; i++) {
		vehicles.push(createRover(i, totalVehicles[i].startingPosition, totalVehicles[i].startingDirection));
	}
	return vehicles;
};
