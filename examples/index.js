import {
  getParsedUSFM,
  getBookObjectFromRef,
  getVerseObjects,
  getBookStringFromRef,
} from "../src/index.js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Get the URL of the current module
const __filename = fileURLToPath(import.meta.url);

// Get the directory name of the current module
const __dirname = dirname(__filename);

const usfm = fs.readFileSync(
  path.join(__dirname, "./data/", "aligned-3JN.usfm"),
  "utf8"
);

const bookObject = getParsedUSFM(usfm).chapters;

const verseString = getBookStringFromRef({ bookObject, ref: "1:1-5" });
console.log(verseString);

const BookPortionObject = getBookObjectFromRef({ bookObject, ref: "1:1-5" });
console.log(verseStrings);

console.log("Exapmle end");
