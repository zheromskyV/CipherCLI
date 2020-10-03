const {
  UPPER_CASE_LOWER_BOUND,
  UPPER_CASE_UPPER_BOUND,
  LOWER_CASE_LOWER_BOUND,
  LOWER_CASE_UPPER_BOUND,
} = require('./constants');

function shouldCipher(char) {
  return char.match(/[A-Za-z]/);
}

function isUpperCase(charCode) {
  return charCode >= UPPER_CASE_LOWER_BOUND && charCode <= UPPER_CASE_UPPER_BOUND;
}

function isLowerCase(charCode) {
  return charCode >= LOWER_CASE_LOWER_BOUND && charCode <= LOWER_CASE_UPPER_BOUND;
}

module.exports = {
  shouldCipher,
  isUpperCase,
  isLowerCase,
};
