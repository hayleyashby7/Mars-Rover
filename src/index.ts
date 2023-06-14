import { runMission } from './Mission/mission';

const input: string = `5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM`;
console.log(`Input:\n${input}`);

console.log(`\nOutput:\n${runMission(input)}`);
