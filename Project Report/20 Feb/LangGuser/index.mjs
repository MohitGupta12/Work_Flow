const prompt = process.argv[2];
console.log(prompt);
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import francs from "franc";
const langs = require("langs")
let langCode = francs(prompt);
let output = langs.where("3", langCode);
console.log(output);
