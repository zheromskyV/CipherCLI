const program = require('commander');
const { pipeline } = require('stream');
const fs = require('fs');
const Transformer = require('./src/transformer');
const validateOptions = require('./src/validation');

program
  .storeOptionsAsProperties(false)
  .version('1.0.0')
  .option('-s --shift <shift>', 'caesar cipher shift')
  .option('-i --input <file>', 'input file')
  .option('-o --output <file>', 'output file')
  .option('-a --action <action>', 'action: encode/decode')
  .parse(process.argv);

const { shift, action, input, output } = program.opts();

validateOptions(shift, action, input, output, () => process.exit(1));

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
