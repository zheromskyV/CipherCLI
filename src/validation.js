const fs = require('fs');

function validateFile(file, mode) {
  if (mode !== 'input' && mode !== 'output') {
    return false;
  }

  if (fs.existsSync(file)) {
    try {
      fs.accessSync(file, mode === 'input' ? fs.constants.W_OK : fs.constants.R_OK);
    } catch (err) {
      console.error(`"${mode}" file "${file}" is not accessible`);
      return false;
    }
  } else {
    console.error(`"${mode}" file "${file}" does not exist`);
    return false;
  }

  return true;
}

function validateOptions(shift, action, input, output, terminator) {
  let wasError = false;

  if (shift === undefined) {
    console.error('"shift" is required');
    wasError = true;
  }

  if (!Number.isInteger(+shift)) {
    console.error('"shift" must be integer');
    wasError = true;
  }

  if (action === undefined) {
    console.error('"action" is required');
    wasError = true;
  }
  
  if (action !== 'encode' && action !== 'decode') {
    console.error('"action" must be "encode" or "decode"');
    wasError = true;
  }

  if (input && !validateFile(input, 'input')) {
    wasError = true;
  }

  if (output && !validateFile(output, 'output')) {
    wasError = true;
  }

  if (wasError) {
    terminator();
  }
}

module.exports = validateOptions;
