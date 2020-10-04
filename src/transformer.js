const { Transform } = require('stream');
const caesar = require('./caesar');

class Transformer extends Transform {
  constructor(action, shift) {
    super();
    this.action = action;
    this.shift = +shift;
  }

  _transform(chunk, encoding, callback) {
    const strToCipher = chunk.toString('utf8');
    const cipheredStr = caesar(strToCipher, this.action === 'encode' ? this.shift : -this.shift);
    this.push(cipheredStr);
    callback();
  }
}

module.exports = Transformer;
