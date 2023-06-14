import { Vehicle } from '../types.d';
import { isDirection, Direction } from '../utils/direction';
import { Position, isValidPosition } from '../utils/position';
import { Move, isMove, moveForward, turnLeft, turnRight } from '../utils/move';

export class Rover implements Vehicle {
	readonly ID: number;
	Position: Position;
	Direction: Direction;

	constructor(id: number = 0, position: Position = { x: 0, y: 0 }, direction: Direction = 'N') {
		this.ID = id;
		this.Position = position;
		this.Direction = direction;
	}

	changePosition = (newPosition: Position): Rover => {
		isValidPosition(newPosition) ? (this.Position = newPosition) : null;
		return this;
	};
	changeDirection = (newDirection: string): Rover => {
		isDirection(newDirection) ? (this.Direction = newDirection as Direction) : null;
		return this;
	};

	move = (move: string): Rover => {
		if (!isMove(move)) {
			console.log(`Invalid move: ${move}`);
			return this;
		}

		switch (move) {
			case 'M' as Move:
				return this.changePosition(moveForward(this.Direction, this.Position));

			case 'L' as Move:
				return this.changeDirection(turnLeft(this.Direction));

			case 'R' as Move:
				return this.changeDirection(turnRight(this.Direction));

			default:
				return this;
		}
	};
}

export const createRover = (id: number = 0, position: Position = { x: 0, y: 0 }, direction: Direction = 'N'): Rover => new Rover(id, position, direction);
