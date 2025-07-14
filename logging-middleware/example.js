// example.js
import { Log } from './logger.js';

async function main() {
  await Log('backend', 'error', 'handler', 'Received string, expected boolean');
  await Log('frontend', 'info', 'component', 'UserCard rendered successfully');
  await Log('backend', 'debug', 'db', 'User fetched from MongoDB');
}

main();
