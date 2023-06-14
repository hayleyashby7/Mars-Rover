import { Input, VehicleInput } from '../types';

export const parseInput = (input: string): Input => {
	const lines = input.split('\n');
	const plateau = parsePlateau(lines[0]);
	const vehiclesList = parseVehicles(lines.slice(1));

	return {
		PlateauHeight: plateau[0],
		PlateauWidth: plateau[1],
		VehicleInputs: vehiclesList,
	};
};

const parsePlateau = (input: string): [number, number] => {
	const plateau = input.split(' ');
	return [parseInt(plateau[0]), parseInt(plateau[1])];
};

const parseVehicles = (input: string[]): VehicleInput[] => {
	const vehicles: VehicleInput[] = [];

	for (let i = 0; i < input.length; i += 2) {
		input[i] = input[i].replace(/\s/g, '');

		vehicles.push({
			startingPosition: {
				x: parseInt(input[i][0]),
				y: parseInt(input[i][1]),
			},
			startingDirection: input[i][2],
			moves: input[i + 1],
		});
	}
	return vehicles;
};
