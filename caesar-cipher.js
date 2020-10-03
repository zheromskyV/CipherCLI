const program = require('commander');

program
  .storeOptionsAsProperties(false)
  .version('1.0.0')
  .option('-s --shift <shift>', 'caesar cipher shift')
  .option('-i --input <file>', 'input file', process.stdin)
  .option('-o --output <file>', 'output file', process.stdout)
  .option('-a --action <action>', 'action: encode/decode')
  .parse(process.argv);

console.log(program.opts());
const { shift, action, input, output } = program.opts();

if (shift === undefined || action === undefined) {
  console.error('"shift" and "action" are required');
  process.exit(1);
}

if (action !== 'encode' || action !== 'decode') {
  console.error('"action" must be "encode" or "decode"');
  process.exit(1);
}
