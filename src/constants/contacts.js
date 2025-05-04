import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as fs from 'node:fs/promises';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const PATH_DB = path.join(dirname, '../db/db.txt');
console.log("works");

console.log(fs.readFile(PATH_DB, { encoding: 'utf-8'}));

