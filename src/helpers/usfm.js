import usfmjs from "usfm-js";

/**
 * @description Parses the usfm file using usfm-parse library.
 * @param {string} usfmData - USFM data to parse
 */
export function getParsedUSFM(usfmData) {
  try {
    if (usfmData) {
      return usfmjs.toJSON(usfmData, {
        convertToInt: ["occurrence", "occurrences"],
      });
    }
  } catch (e) {
    console.error(e);
  }
}
