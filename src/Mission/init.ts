import { Mission, Input, Vehicle } from '../types.d';
import { createRover } from '../Rover/rover';
import { createPlateau } from '../Plateau/plateau';
import { parseInput } from '../utils/input';

export const initialiseMission = (input: string = ''): Mission => {
	if (input === '') {
		return { Plateau: createPlateau(), Vehicles: [createRover()] };
	}

	const parsedInput: Input = parseInput(input);

	const plateau = createPlateau(parsedInput.PlateauHeight, parsedInput.PlateauWidth);
	const vehicles: Vehicle[] = generateVehicles(parsedInput.NumberOfVehicles);

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
