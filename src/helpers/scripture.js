import { getVerses } from 'bible-reference-range';
import { verseObjectsToString } from './verseObjects';

/**
 * find all verses in ref and return as long string
 * @param {object} bookData - indexed by chapter and then verse ref
 * @param {string} ref - formats such as “2:4-5”, “2:3a”, “2-3b-4a”, “2:7,12”, “7:11-8:2”, "6:15-16;7:2"
 * @param {boolean} failOnMissingVerse
 * @returns {string}
 */
export function getVerseString(bookData, ref, failOnMissingVerse = true) {
  let _verseObjects = [];
  const verseRefs = getVerses(bookData, ref);

  for (const verseRef of verseRefs) {
    if (!verseRef.verseData && failOnMissingVerse) {
      return null;
    }

    const verseData = verseRef.verseData;
    let verseObjects; // (verseData && verseData.verseObjects);

    if (verseData) {
      if (typeof verseData === 'string') {
        verseObjects = [{ text: verseData }];
      } else if (Array.isArray(verseData)) {
        verseObjects = verseData;
      } else if (verseData.verseObjects) {
        verseObjects = verseData.verseObjects;
      }
      Array.prototype.push.apply(_verseObjects, verseObjects);
    }
  }

  return verseObjectsToString(_verseObjects);
}



export function getVerseStringFromRef({ book, ref }) {
  const verseString = getVerseString(book, ref);

  if (!verseString) {
    // eslint-disable-next-line no-throw-literal
    throw `Reference not found: ${ref}`;
  }
  return verseString;
}