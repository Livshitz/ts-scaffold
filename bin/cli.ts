#!/usr/bin/env bun
// link this command: $ bun link ts-scaffold
// run the command: $ bun run cli a b OR cli a b

const args = process.argv.slice(2);
const arg1 = args[0] || 'hello';
const arg2 = args[1] || 'world';

try {
	console.log(`DBG: ${arg1} | ${arg2}`);

	console.log('Done!');
} catch (error) {
	console.error(`Error: `, error);
	process.exit(1);
}