const program = require('commander');
const { pipeline } = require('stream');
const fs = require('fs');
const Transformer = require('./src/transformer');

program
  .storeOptionsAsProperties(false)
  .version('1.0.0')
  .option('-s --shift <shift>', 'caesar cipher shift')
  .option('-i --input <file>', 'input file')
  .option('-o --output <file>', 'output file')
  .option('-a --action <action>', 'action: encode/decode')
  .parse(process.argv);

const { shift, action, input, output } = program.opts();

if (shift === undefined || action === undefined) {
  console.error('"shift" and "action" are required');
  process.exit(1);
}

if (action !== 'encode' && action !== 'decode') {
  console.error('"action" must be "encode" or "decode"');
  process.exit(1);
}

pipeline(
  input ? fs.createReadStream(input) : process.stdin,
  new Transformer(action, shift),
  output ? fs.createWriteStream(output) : process.stdout,
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
      process.exit(1);
    }
  }
);
