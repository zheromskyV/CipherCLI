# CipherCLI

Caesar cipher CLI tool.
It can encode and decode text data using Caesar's cipher.
The app transform only latin letters, other characters remain unchanged.

## How to install

1. Download or clone this repository
2. Go to the app folder (`CipherCLI`)
3. Use the command `npm i` or `npm install` to install the dependencies

## How to use

In the app folder write the command `node caesar-cipher [options]`, where the `options` are:
* `-s, --shift`: cipher shift (required, integer)
* `-a, --action`: action - encode/decode (required)
* `-i, --input`: input file (default: `stdin`)
* `-o, --output`: output file (default: `stdout`)

### Usage examples:

```bash
$ node caesar-cipher --action encode --shift 11 --input first-file.txt --output second-file.txt

$ node caesar-cipher -a encode -s 11 -i first-file.txt -o second-file.txt

$ node caesar-cipher -a encode --shift 52 -o "./output.txt"

$ node caesar-cipher -a decode -s 52
```
