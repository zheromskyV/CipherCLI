const {
  UPPER_CASE_LOWER_BOUND,
  LOWER_CASE_LOWER_BOUND,
  LETTERS_IN_ALPHABET,
} = require('./constants');
const {
  shouldCipher,
  isUpperCase,
  isLowerCase,
} = require('./helpers');

function caesar(input, shift) {
  if (typeof input !== 'string' || typeof shift !== 'number') {
    throw new Error('caesar: "input" arg must be a string; "shift" arg must be a number');
  }

  if (shift < 0) {
    shift += 26;
  }

  let output = '';

  input.split('').forEach((char) => {
    if (shouldCipher(char)) {
      const code = char.charCodeAt(0);
      let cipheredCode;

      if (isUpperCase(code)) {
        cipheredCode = ((code - UPPER_CASE_LOWER_BOUND + shift) % LETTERS_IN_ALPHABET) + UPPER_CASE_LOWER_BOUND;
      } else if (isLowerCase(code)) {
        cipheredCode = ((code - LOWER_CASE_LOWER_BOUND + shift) % LETTERS_IN_ALPHABET) + LOWER_CASE_LOWER_BOUND;
      }

      output += String.fromCharCode(cipheredCode);
    } else {
      output += char;
    }
  });

  return output;
}

module.exports = caesar;
