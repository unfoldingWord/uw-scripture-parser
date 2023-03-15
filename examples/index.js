import { getParsedUSFM } from "../src";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Get the URL of the current module
const __filename = fileURLToPath(import.meta.url);

// Get the directory name of the current module
const __dirname = dirname(__filename);

const usfm = fs.readFileSync(
  path.join(__dirname, "./data/", "aligned-2JN.usfm"),
  "utf8"
);

const bibleObject = getParsedUSFM(usfm);
console.log(bibleObject);
