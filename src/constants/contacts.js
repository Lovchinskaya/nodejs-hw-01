
import { readFile } from 'node:fs';

export const PATH_DB = readFile('./db.json', {encoding: "utf-8"}, (err, data) => {
 if (err){
    throw err;
 }
 console.log(data);
 return data;
});
console.log("hi y");
