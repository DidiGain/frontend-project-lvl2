#! /usr/bin/env node

import commander from 'commander';

const program = new commander.Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-h, --help', 'output usage information')
  .option('-f, --format [type]',  'output format');
  
program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
  